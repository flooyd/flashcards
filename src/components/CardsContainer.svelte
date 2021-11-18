<script>
  import selectedDeck from "../stores/selectedDeck";
  import cards from "../stores/cards";
  import Card from "./Card.svelte";
</script>

<div class="cardsContainer">
  {#each $cards as card}
    <Card question={card.question} answer={card.answer} />
  {/each}
</div>

<style>
  .cardsContainer {
    display: flex;
    flex-wrap: wrap;
    min-height: 300px;
    background: lightyellow;
  }
</style>
