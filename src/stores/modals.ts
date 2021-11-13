import { writable } from 'svelte/store';

const modals = writable({
  loginModal: {
    show: false,
    register: false
  }
});

modals.subscribe((value) => value);

export default modals;
