import { writable } from 'svelte/store';

const user = writable({
  auth: false,
  username: null,
});

user.subscribe((value) => value);

export default user;
