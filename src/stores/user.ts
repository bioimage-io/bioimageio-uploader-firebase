import { writable } from "svelte/store";
import type firebase from "firebase/app";

const user = writable<{
  is_logged_in: boolean;
  user_info?: firebase.UserInfo;
  firebase_controlled: boolean;
}>({
  is_logged_in: false,
  firebase_controlled: false,
});

export default {
  subscribe: user.subscribe,
  set: user.set,
};
