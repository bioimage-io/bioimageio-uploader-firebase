<script>
    // import "@picocss/pico/css/pico.css"; 
    import "./app.scss";
    import {Route, router} from 'tinro'; 
    import { onMount } from 'svelte';
    import authStore from "./stores/authStore";
    //import {Home} from 'lucide-svelte';
    //import {fade} from 'svelte/transition';
    import Uploader from './components/Uploader/index.svelte';
    import Status from './components/Status.svelte';
    import Transition from './components/Transition.svelte';
    router.mode.hash();

    // Import the functions you need from the SDKs you need
    import firebase from 'firebase/compat/app';
    import { initializeApp } from "firebase/app";
    import { getAnalytics } from "firebase/analytics";
    import * as firebaseui from 'firebaseui';

    import { getStorage, ref, uploadBytes, uploadBytesResumable, getDownloadURL } from "firebase/storage";
    import 'firebaseui/dist/firebaseui.css';
    import { getFunctions, httpsCallable } from "firebase/functions";
    import { Uploader as UploaderClass } from './lib/uploader';

    let uploader = new UploaderClass();


    import { getAuth, signOut } from 'firebase/auth';
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyCrFU6IotD3jzjGusR_zDMoXhvsUl2h1TY", 
      authDomain: "bioimageio-fb463.firebaseapp.com",
      projectId: "bioimageio-fb463",
      storageBucket: "bioimageio-fb463.appspot.com",
      messagingSenderId: "861528698214",
      appId: "1:861528698214:web:e6665d84c3b4a2086f2ca7",
      measurementId: "G-FCRSWHEQX0"
    };

    let user;
    
    var uiConfig = {
        callbacks: {
          signInSuccessWithAuthResult: function(authResult, redirectUrl) {
            user = authResult.user;
            var credential = authResult.credential;
            var isNewUser = authResult.additionalUserInfo.isNewUser;
            var providerId = authResult.additionalUserInfo.providerId;
            var operationType = authResult.operationType;
            // Do something with the returned AuthResult.
            // Return type determines whether we continue the redirect
            // automatically or whether we leave that to developer to handle.
            return false;// true;
            
          },
          signInFailure: function(error) {
            // Some unrecoverable error occurred during sign-in.
            // Return a promise when error handling is completed and FirebaseUI
            // will reset, clearing any UI. This commonly occurs for error code
            // 'firebaseui/anonymous-upgrade-merge-conflict' when merge conflict
            // occurs. Check below for more details on this.
            user = null;  
            return handleUIError(error);
          },
          uiShown: function() {
            // The widget is rendered.
            // Hide the loader.
            document.getElementById('loader').style.display = 'none';
          }
        },
        credentialHelper: firebaseui.auth.CredentialHelper.NONE,
        // Query parameter name for mode.
        queryParameterForWidgetMode: 'mode',
        // Query parameter name for sign in success url.
        queryParameterForSignInSuccessUrl: 'signInSuccessUrl',
        // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
        signInFlow: 'popup',
        //signInSuccessUrl: '<url-to-redirect-to-on-success>',
        signInOptions: [
          // Leave the lines as is for the providers you want to offer your users.
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          //firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          //firebase.auth.TwitterAuthProvider.PROVIDER_ID,
          firebase.auth.GithubAuthProvider.PROVIDER_ID,
          {
            provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
            // Whether the display name should be displayed in the Sign Up page.
            requireDisplayName: true
          },
        ],
        // Set to true if you only have a single federated provider like
        // firebase.auth.GoogleAuthProvider.PROVIDER_ID and you would like to
        // immediately redirect to the provider's site instead of showing a
        // 'Sign in with Provider' button first. In order for this to take
        // effect, the signInFlow option must also be set to 'redirect'.
        immediateFederatedRedirect: false,
        // tosUrl and privacyPolicyUrl accept either url string or a callback
        // function.
        // Terms of service url/callback.
        tosUrl: '<your-tos-url>',
        // Privacy policy url/callback.
        privacyPolicyUrl: function() {
          window.location.assign('<your-privacy-policy-url>');
        }
      };

    let auth;
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const functions = getFunctions(app);
    // Create a root reference
    const storage = getStorage();


    uploader.get_temporary_upload_url = httpsCallable(functions, 'get_temporary_upload_url');
    uploader.upload_file_firebase = async (filepath, file, progress_callback)=>{
        const storage_ref = ref(storage, filepath);
        const uploadTask = uploadBytesResumable(storage_ref, file);
        const download_url = "";
        let self = uploader;

        let url = await new Promise(function(resolve, reject) {

            // Listen for state changes, errors, and completion of the upload.
            uploadTask.on('state_changed',
                (snapshot) => {
                    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                    if(progress_callback !== null)
                        progress_callback(snapshot.bytesTransferred, snapshot.totalBytes);
                }, 
                (error) => {
                    // A full list of error codes is available at
                    // https://firebase.google.com/docs/storage/web/handle-errors
                    switch (error.code) {
                        case 'storage/unauthorized':
                        // User doesn't have permission to access the object
                        break;
                    case 'storage/canceled':
                        // User canceled the upload
                        break;

                        // ...

                    case 'storage/unknown':
                        // Unknown error occurred, inspect error.serverResponse
                        break;
                    }
                }, 
                async () => {
                    // Upload completed successfully, now we can get the download URL
                    let download_url = await getDownloadURL(uploadTask.snapshot.ref);
                    self.download_url = download_url;
                    console.log(download_url);
                    console.log(self);
                    resolve(download_url);
                }
            );
        });
        return url;
    } 
    uploader.ci_stage_firebase = httpsCallable(functions, 'stage');

    onMount(async () => {
        // Initialize Firebase
        //let result = await hello_world({ text: 'aaaa'});
        //// Read result of the Cloud Function.
        //var sanitizedMessage = result.data.message;
        //alert(sanitizedMessage);
        
        console.log(app);
        auth = getAuth(app);
        console.log(auth);
        var ui = new firebaseui.auth.AuthUI(auth);
        ui.start('#firebaseui-auth-container', uiConfig);
        auth.onAuthStateChanged((new_user) => {
            authStore.set({
                isLoggedIn: new_user !== null,
                user: new_user,
                firebaseControlled: true,
            });
            user = new_user;
            console.log("Auth state changed");
            console.log(user);
            if(user === null){
                ui.start('#firebaseui-auth-container', uiConfig);
            } 
        });

    })



    async function handleSignout(){
        await signOut(auth); 
        user = null;

    }
</script>
<style>
</style>

<nav class="container-fluid">
    <ul>
        <li><strong>BioImage.IO</strong></li>
    </ul>
    <ul>
        <li><a href="/">Uploader</a></li>
        <li><a href="/status">Status</a></li>
    </ul>
</nav>
  {#if user}
      <button on:click={handleSignout} >Logout</button>
  {:else}
      <div id="firebaseui-auth-container"></div>
  {/if}
  

<Transition> 
    <Route path="/">
        <Uploader { uploader } />
    </Route>
    <Route path="/status">
        <Status />
    </Route>
    <Route path="/status/:resource_id" let:meta>
        <Status resource_id={meta.params.resource_id} />
    </Route>
</Transition>
