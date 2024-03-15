<script lang="ts">
    import { onMount } from 'svelte';
    import { get_chats, update_chat } from "../lib/chat.ts";
    export let resource_id="";
    export let get_json;

    let chats=[];

    onMount(async () =>{
        get_chat();
    })
    let chat_message="";

    async function get_chat(){
        if(resource_id && get_json){
            //let new_chats = await get_chats(resource_id);
            let new_chats = await get_json({'url':`https://uk1s3.embassy.ebi.ac.uk/public-datasets/sandbox.bioimage.io/${resource_id}/staged/1/chat.json`});
            console.log(new_chats);
            if(Array.isArray(new_chats)){
                chats = new_chats;
            }else{
                console.error("Returned 'chats' object not an array");
                console.error(new_chats);
            }
        }

    }

    async function update_remote_chat(){
        if(!resource_id) return;
        let text=chat_message;
        const resp = await update_chat(resource_id, text);

        get_chat();

        chat_message = "";
    }
</script>

<h1>Chat</h1>
{#each chats as message}
    <div>
        <code title="{message.time}">[{message.user}]</code> : {message.text}
    </div>
{/each}
<form>
<input bind:value={chat_message} />
<button on:click={update_remote_chat}>Send</button>
</form>
