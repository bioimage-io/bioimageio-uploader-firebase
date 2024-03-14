<script lang="ts">
    import { onMount } from 'svelte';
    import svelteLogo from './assets/svelte.svg'
    //import viteLogo from '/vite.svg'
    import Counter from './lib/Counter.svelte'
    import authStore from "./stores/authStore";

    // Import the functions you need from the SDKs you need
    import firebase from 'firebase/compat/app';
    import { initializeApp } from "firebase/app";
    import { getAnalytics } from "firebase/analytics";
    import * as firebaseui from 'firebaseui';
    import 'firebaseui/dist/firebaseui.css';
    import { getFunctions, httpsCallable } from "firebase/functions";



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
          firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          firebase.auth.TwitterAuthProvider.PROVIDER_ID,
          firebase.auth.GithubAuthProvider.PROVIDER_ID,
          {
            provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
            // Whether the display name should be displayed in the Sign Up page.
            requireDisplayName: true
          },
          {
            provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
            // Invisible reCAPTCHA with image challenge and bottom left badge.
            recaptchaParameters: {
              type: 'image',
              size: 'invisible',
              badge: 'bottomleft'
            }
          },
          firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
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
    let app;
    let functions;

    onMount(async () => {
        // Initialize Firebase
        app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);
        functions = getFunctions(app);
        const hello_world = httpsCallable(functions, 'hello_world');
        let result = await hello_world({ text: 'aaaa'});
        // Read result of the Cloud Function.
        var sanitizedMessage = result.data.message;
        alert(sanitizedMessage);
        
        auth = getAuth(app);
        console.log(app);
        console.log(auth);
        var ui = new firebaseui.auth.AuthUI(auth);
        ui.start('#firebaseui-auth-container', uiConfig);
        auth.onAuthStateChanged((new_user) => {
            authStore.set({
                isLoggedIn: new_user !== null,
                new_user,
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

<main>
  <div>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>
  <h1>Vite + Svelte</h1>
  <div id="loader">I'm a loader</div>

  <div class="card">
    {#if user}
        <h2>Hi {user.displayName}</h2>
    {/if}    
    <Counter />
  </div>


  <p>
    Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>, the official Svelte app framework powered by Vite!
  </p>

  
  {#if user}
      <button on:click={handleSignout} >Logout</button>
  {:else}
      <div id="firebaseui-auth-container">Logins</div>
  {/if}
  


  <p class="read-the-docs">
    Click on the Vite and Svelte logos to learn more
  </p>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
