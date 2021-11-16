import { writable } from 'svelte/store';

const user = writable({
  username: null,
  token: null
});

user.subscribe((value) => value);

export default user;
