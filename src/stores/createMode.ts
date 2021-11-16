import { writable } from 'svelte/store';

type createMode = {
  creating: boolean;
  mode: 'deck' | 'card' | '';
}

const createMode = writable<createMode>({
  creating: false,
  mode: ''
});

createMode.subscribe((value) => value);

export default createMode;
