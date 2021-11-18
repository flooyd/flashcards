<script lang="ts">
  import createMode from "../stores/createMode";

  export let decks = [];

  let selected = '';

  const handleClickCreate = () => {
    $createMode = 'deck';
  };

  $: console.log(selected)
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
