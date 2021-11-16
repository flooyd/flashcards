import { writable } from 'svelte/store';

type selectedDeck = {
  name: null | string,
  cards: any[]
}

const selectedDeck = writable({
  name: null,
  cards: []
});

selectedDeck.subscribe((value) => value);

export default selectedDeck;
