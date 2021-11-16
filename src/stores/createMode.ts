import { writable } from 'svelte/store';

const createMode = writable('');

createMode.subscribe((value) => value);

export default createMode;
