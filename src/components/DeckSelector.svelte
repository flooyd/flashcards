<script lang="ts">
import { onMount } from "svelte";
import cards from "../stores/cards";

  import createMode from "../stores/createMode";
  import selectedDeck from "../stores/selectedDeck";
  import user from "../stores/user";

  export let decks = [];

  let selected = "";

  const handleClickCreate = () => {
    $createMode = "deck";
  };

  const getCards = async () => {
    $cards = [];
    const response = await fetch(
      `http://localhost:5001/api/cards/${selected}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${$user.token}`,
        },
      }
    );

    const json = await response.json();
    console.log(json)
    $selectedDeck.name = decks.find((deck) => deck.id === selected).name
    $selectedDeck.id = parseInt(selected);
    $cards = json;
  };

  $: if (selected) {
    getCards();
  }

</script>

<div class="deckSelector">
  {#if decks.length === 0}
    No decks have been created
  {:else}
    <select bind:value={selected}>
      {#each decks as deck}
        <option value={deck.id}>{deck.name}</option>
      {/each}
    </select>
  {/if}
  <button on:click={handleClickCreate}>Create Deck</button>
</div>

<style>
  .deckSelector {
    display: flex;
    align-items: center;
  }

  button {
    margin-left: 8px;
  }

  select {
    width: fit-content;
    min-width: 200px;
    height: 30px;
  }
</style>
