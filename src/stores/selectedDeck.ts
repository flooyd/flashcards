import { writable } from 'svelte/store';

type selectedDeck = {
  name: null | string;
  id: null | number;
  cards: any[];
}

const selectedDeck = writable<selectedDeck>({
  name: null,
  id: null,
  cards: []
});

selectedDeck.subscribe((value) => value);

export default selectedDeck;
