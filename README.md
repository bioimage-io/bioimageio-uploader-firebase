# Overview 

This is a firebase-backed version of the bioimage uploader which uses:

* firebase-authentication instead of hypha-login
* firebase-hosting + cloud functions instead of netlify hosting and functions

This was done to reduce the number of third-party dependencies (nb hypha-login itself uses Auth0 as a backend), 
and the vast part of the codebase is the same as before or simpler. 

This also alleviates the issue we were facing regarding the review process, as before the 
review backend (S3 behind netlify function) needed to verify credentials with an outside system (hypha-login). 
Now, that process is significantly simplified, as firebase-functions (~cloud functions) can trivially check a
requests user's auth status.

## Deployment 

Deployment is via an official Github Action to deploy to firebase-hosting, and relies on 
appropriate action secrets being set; see eg the variables defined 
[here](https://github.com/bioimage-io/bioimageio-uploader-firebase/blob/main/.github/workflows/firebase-hosting-merge.yml)
and [the action used](https://github.com/FirebaseExtended/action-hosting-deploy).

This currently happens when the `main` branch is PRed or merged to, very similarly to netlify, though with less 
PR-sugar (no automated preview links AFAIK).

## UI development 

As before, this is simply a Svelte project (**not** SvelteKit - we use `tinro` as a hash router), and 
contributing can be done using either the firebase-emulator suite to test the functions, or for simple 
front-end testing, standard `npm run dev`. 




