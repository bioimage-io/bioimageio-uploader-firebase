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
def stage(req: https_fn.CallableRequest) -> Any:
    if req.auth is None:
        raise https_fn.HttpsError(code=https_fn.FunctionsErrorCode.FAILED_PRECONDITION,
                                  message="The function must be called while authenticated.")
    # Perform staging, ie take input url and id and pass on to GH CI
    # using secrets
    if not req.data.resource_path:
        error_message = "Failed: resource_path not found in request json"
        return { 'message': error_message, 'status': 500 }
    if (not data.package_url):
        error_message = "Failed: package_url not found in request json"
        return { 'message': error_message, 'status': 500 }


    const options = {
        method: "POST",
        headers: headers,
        body: JSON.stringify({
            'ref': GITHUB_BRANCH,
            'inputs': {
                'resource_id': data.resource_path,
                'package_url': data.package_url,
            }
        })
    };
    let resp_obj = {};

    try {
        const resp = await fetch(GITHUB_URL, options);
        if (resp.status === 204) {
            // According to API docs, just expect a 204
            resp_obj = { 'status': resp.status };
        } else {
            console.error(`Bad response from CI: ${resp.status}`);
            console.error(`Bad response from CI: ${resp.body}`);
            let text = "";
            try {
                text = await resp.text()
            } catch {
                text = "(no-text)";
            }
            const res = Response.json(
                { 'message': `Failed to decode json from CI [status: ${resp.status}, content: ${text}]` },
                { 'status': 500 });
            res.headers.set("Access-Control-Allow-Origin", "*");
            res.headers.append("Access-Control-Allow-Headers", "*");
            res.headers.append("Access-Control-Allow-Methods", "*");
            return res;
        }

    } catch (err) {
        console.error("Failed to fetch from CI endpoint:");
        console.error(GITHUB_URL);
        console.error(err);
        const res = Response.json(
            { 'message': `Failed to fetch from CI endpoint: ${err.message}` },
            { status: 500 });
        res.headers.set("Access-Control-Allow-Origin", "*");
        res.headers.append("Access-Control-Allow-Headers", "*");
        res.headers.append("Access-Control-Allow-Methods", "*");
        return res;
    }
    // const res = new Response("Success");
    const reply_obj = { "message": `Contacted CI: ${resp_obj.message}`, 'status': 200 };
    console.log("Response from CI:");
    console.log(resp_obj);
    const res = Response.json(reply_obj);
    res.headers.set("Access-Control-Allow-Origin", "*");
    res.headers.append("Access-Control-Allow-Headers", "*");
    res.headers.append("Access-Control-Allow-Methods", "*");
    return res;



@https_fn.on_call()
def publish(req: https_fn.CallableRequest) -> Any:
    if req.auth is None:
        raise https_fn.HttpsError(code=https_fn.FunctionsErrorCode.FAILED_PRECONDITION,
                                  message="The function must be called while authenticated.")
    email = req.auth.token.get("email", "")
    if not _is_reviewer(email):
        raise https_fn.HttpsError(code=https_fn.FunctionsErrorCode.FAILED_PRECONDITION,
                                  message="The function must be called while authenticated as a reviewer.")
