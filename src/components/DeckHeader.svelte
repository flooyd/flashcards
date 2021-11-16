<script>
  import selectedDeck from "../stores/selectedDeck";
  import DeckSelector from "./DeckSelector.svelte";
</script>

<div class="deckHeader">
  <div class="title">
    {#if $selectedDeck.name}
      {$selectedDeck.name}
    {:else}
      Please select a deck
    {/if}
  </div>
  <DeckSelector/>
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
  }
</style>
