import { writable } from 'svelte/store';

const modals = writable({
  loginModal: {
    show: true
  }
});

modals.subscribe((value) => value);

export default modals;
