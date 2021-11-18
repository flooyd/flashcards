import { writable } from 'svelte/store';

const cards = writable([]);

cards.subscribe((value) => value);

export default cards;
