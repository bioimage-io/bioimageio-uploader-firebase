<script lang="ts">
    import { onMount } from 'svelte';
    import { getAuth, signInWithPopup, signOut, GoogleAuthProvider, GithubAuthProvider, signInWithEmailAndPassword } from 'firebase/auth';
    import { auth } from "../lib/firebase";
    import user_state from "../stores/user";
    import { CircleUserRound } from 'lucide-svelte'
    export let show = false;
    export let user = null;

    const providers = {
        "google": {
            login: async () => {
                const provider = new GoogleAuthProvider();
                const result = await signInWithPopup(auth, provider);
            },
        },
        "github": {
            login: async () => {
                const provider = new GithubAuthProvider();
                const result = await signInWithPopup(auth, provider);
                // This gives you a GitHub Access Token. You can use it to access the GitHub API.
                const credential = GithubAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;

                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
            },
        },
        "username": {
            login: async () => {
                const result = await signInWithEmailAndPassword(auth, provider);
            },
        },
    }


    function login(provider_name){
        if(provider_name in providers){
            providers[provider_name].login();
        }else{
            throw new Error(`Unknown provider: ${provider_name}`);
        }
        
    }


    onMount(async () => {
        console.log(auth);
        auth.onAuthStateChanged((new_user) => {
            user_state.set({
                is_logged_in: new_user !== null,
                user_info: new_user,
                firebase_controlled: true,
            });
            console.log("Auth state changed, user (in Login element) is");
            console.log(new_user);
            user = new_user;
            //if(new_user !== null) show=false;
            show=false;
        });

    })

    async function handleSignout(){
        await signOut(auth); 
        user_state.set(null);
        show=false;
    }

</script> 


<details class="dropdown">
    <summary>
        {#if user === null}
        <span>
            Login
        </span>
        {:else}
            <span>{user.displayName }</span>
        {/if}
    </summary>
    <ul dir="rtl">
        {#if user === null}
            <li><a on:click={()=>{login("google")}}>Google</a></li>
            <li><a on:click={()=>{login("github")}}>Github</a></li>
            <li><a on:click={()=>{login("username")}}>Username + Password</a></li>
        {:else}
            <li><button on:click={handleSignout}>Logout</button></li>
        {/if}
    </ul>
</details>


<dialog open={show}>
    <article>
        {#if user === null} 
            <header>Login using one of the following providers</header>
            <div id="providers" >
            </div>
        {:else}
            <button on:click={handleSignout}>Logout</button>
        {/if}
    </article>
</dialog>
