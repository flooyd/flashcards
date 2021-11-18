<script>
  export let question;
  export let answer;

  let showQuestion = true;

  const toggle = () => {
    showQuestion = !showQuestion;
  };
</script>

<div on:click={toggle} class="card">
    {#if showQuestion}
      <div class="cardSide">Question</div>
      <div>{question ? question : " "}</div>
    {:else}
    <div class="cardSide">Answer</div>
      <div>{answer ? answer : " "}</div>
    {/if}
</div>

<style>
  .card {
    min-height: 300px;
    max-height: 300px;
    width: 300px;
    margin: 13px;
    border: 1px solid blue;
    background: white;
    text-align: left;
    padding: 8px;
  }

  .cardSide {
    font-weight: bold;
    text-align: center;
    margin-bottom: 13px;
  }
</style>
