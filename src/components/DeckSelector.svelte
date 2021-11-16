<script>
  import createMode from "../stores/createMode";

  const handleClickCreate = () => {
    $createMode = 'deck';
  };
</script>

<div class="deckSelector">
  <div>No decks have been created</div>
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
</style>
