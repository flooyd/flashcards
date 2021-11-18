<script>
  import { onMount } from "svelte";

  import user from "../stores/user";

  import selectedDeck from "../stores/selectedDeck";
  import DeckSelector from "./DeckSelector.svelte";
  import createMode from "../stores/createMode";
  import cards from "../stores/cards";

  let decks = [];

  onMount(async () => {
    try {
      const response = await fetch("http://localhost:5001/api/decks", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${$user.token}`,
        },
      });
      const json = await response.json();
      decks = json;
    } catch (err) {
      console.log(err);
    }
  });
</script>

<div class="deckHeader">
  <div class="title">
    {#if $selectedDeck.name}
      <div>{$selectedDeck.name} - {$cards.length} cards</div>
      <button on:click={() => ($createMode = "card")}>Add Card</button>
    {:else}
      Please select a deck
    {/if}
  </div>
  <DeckSelector {decks} />
</div>

<style>
  .deckHeader {
    margin: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .title {
    font-size: 20px;
    display: flex;
    align-items: center;
  }

  button {
    margin-left: 8px;
  }
</style>
