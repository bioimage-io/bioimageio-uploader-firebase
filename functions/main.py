# Welcome to Cloud Functions for Firebase for Python!
# To get started, simply uncomment the below code or create your own.
# Deploy with `firebase deploy`
import os
from typing import Any
from datetime import timedelta

from minio import Minio

from firebase_functions import https_fn
from firebase_admin import initialize_app

app = initialize_app()
# initialize_app()


def _is_reviewer(email):
    return email in ("metz.jp@gmail.com", )


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


@https_fn.on_call()
def publish(req: https_fn.CallableRequest) -> Any:
    if req.auth is None:
        raise https_fn.HttpsError(code=https_fn.FunctionsErrorCode.FAILED_PRECONDITION,
                                  message="The function must be called while authenticated.")
    email = req.auth.token.get("email", "")
    if not _is_reviewer(email):
        raise https_fn.HttpsError(code=https_fn.FunctionsErrorCode.FAILED_PRECONDITION,
                                  message="The function must be called while authenticated as a reviewer.")
