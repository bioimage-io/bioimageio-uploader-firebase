# Welcome to Cloud Functions for Firebase for Python!
# To get started, simply uncomment the below code or create your own.
# Deploy with `firebase deploy`
import os
from typing import Any
from datetime import timedelta
import json

import requests
from minio import Minio

from firebase_functions import https_fn
from firebase_admin import initialize_app

app = initialize_app()
# initialize_app()


def _is_reviewer(email):
    return email in ("metz.jp@gmail.com", )


@https_fn.on_call()
def get_json(req: https_fn.CallableRequest) -> Any:
    url = req.data['url']
    try:
        data = requests.get(url).json()
    except JSONDecodeError:
        data = {}
    return data


@https_fn.on_call()
def is_reviewer(req: https_fn.CallableRequest) -> Any:
    if req.auth is None:
        raise https_fn.HttpsError(code=https_fn.FunctionsErrorCode.FAILED_PRECONDITION,
                                  message="The function must be called while authenticated.")
    email = req.auth.token.get("email", "")
    return {'is_reviewer': _is_reviewer(email)}


@https_fn.on_call(secrets=["S3_ACCESS_KEY_ID", "S3_SECRET_ACCESS_KEY"])
def get_temporary_upload_url(req: https_fn.CallableRequest) -> Any:

    # lifetime=timedelta(hours=1)
    if req.auth is None:
        raise https_fn.HttpsError(code=https_fn.FunctionsErrorCode.FAILED_PRECONDITION,
                                  message="The function must be called while authenticated.")
    uid = req.auth.uid
    path = f"{os.environ['S3_ROOT_FOLDER_UPLOAD']}/{uid}/{req.data['filename']}"

    # Use Minio client to get presigned URLs on EBI-S3
    # Use the uid as the folder?
    client = Minio(
        os.environ["S3_ENDPOINT"],
        os.environ["S3_ACCESS_KEY_ID"],
        os.environ["S3_SECRET_ACCESS_KEY"],
    )

    url = client.presigned_put_object(
        os.environ["S3_BUCKET_NAME"],
        path,
    )
    return {"url": url}


@https_fn.on_call(secrets=["GITHUB_TOKEN"])
def stage(req: https_fn.CallableRequest) -> Any:
    if req.auth is None:
        raise https_fn.HttpsError(code=https_fn.FunctionsErrorCode.FAILED_PRECONDITION,
                                  message="The function must be called while authenticated.")
    # Perform staging, ie take input url and id and pass on to GH CI
    # using secrets
    resource_path = req.data['resource_path']
    package_url = req.data['package_url']
    headers = {
        'Accept': 'application/vnd.github.v3+json',
        'Authorization': f"token {os.environ['GITHUB_TOKEN']}",
        'Content-Type': "application/json",
    }
    data = {
            'ref': os.environ['GITHUB_BRANCH'],
            'inputs': {
                'resource_id': resource_path,
                'package_url': package_url,
            }
    }
    print("NOTIFYING GITHUB:")
    print("headers")
    print(headers)
    print("data")
    print(data)

    resp = requests.post(os.environ['GITHUB_URL_STAGE'],
                         data=json.dumps(data),
                         headers=headers)
    if resp.status_code == 204:
        # According to API docs, just expect a 204
        return { 'status': resp.status_code }
    else:
        return {'message': f"Failed :(  {resp.content}", 'status':500}


@https_fn.on_call(secrets=["GITHUB_TOKEN"])
def publish(req: https_fn.CallableRequest) -> Any:
    if req.auth is None:
        raise https_fn.HttpsError(code=https_fn.FunctionsErrorCode.FAILED_PRECONDITION,
                                  message="The function must be called while authenticated.")
    email = req.auth.token.get("email", "")
    if not _is_reviewer(email):
        raise https_fn.HttpsError(code=https_fn.FunctionsErrorCode.FAILED_PRECONDITION,
                                  message="The function must be called while authenticated as a reviewer.")
    # Perform publish, ie take input url and id and pass on to GH CI
    # using secrets
    resource_path = req.data['resource_path']
    package_url = req.data['package_url']
    headers = {
        'Accept': 'application/vnd.github.v3+json',
        'Authorization': f"token {os.environ['GITHUB_TOKEN']}"
    }

    data = {
            'ref': os.environ['GITHUB_BRANCH'],
            'inputs': {
                'resource_id': resource_path,
                'package_url': package_url,
            }
    }

    resp = requests.post(os.environ['GITHUB_URL_PUBLISH'], json=data, headers=headers)
    if resp.status_code == 204:
        # According to API docs, just expect a 204
        return { 'status': resp.status_code }
    else:
        return {'message': "Failed", 'status':500}
