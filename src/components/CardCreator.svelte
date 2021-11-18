<script>
  import createMode from "../stores/createMode";

  import selectedDeck from "../stores/selectedDeck";
  import cards from "../stores/cards";

  import user from "../stores/user";

  let question = "";
  let answer = "";
  let loading = false;

  const handleSubmit = async (event) => {
    event.preventDefault();
    loading = true;
    try {
      const response = await fetch("http://localhost:5001/api/cards", {
        method: "POST",
        body: JSON.stringify({ question, answer, deck_id: $selectedDeck.id }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${$user.token}`,
        },
      });
      if (response.status === 200) {
        const json = await response.json();
        console.log(json)
        $cards = [...$cards, json ]
        $createMode = "";
      } else {
        console.log("unique error?");
      }
    } catch (err) {
      console.log(err);
    }
  };
</script>

<div class="cardCreator">
  <div class="title">Create Card</div>
  {#if loading}
    Loading...
  {:else}
    <form on:submit={handleSubmit}>
      <label for="question">Question</label>
      <textarea name="question" bind:value={question} />
      <label for="question">Answer</label>
      <textarea name="question" bind:value={answer} />
      <button>Create</button>
    </form>
  {/if}
</div>

<style>
  .title {
    margin-bottom: 20px;
  }
  .cardCreator {
    margin: 20px;
  }
  label, textarea {
    display: block;
    margin-bottom: 10px;
  }

  textarea {
    padding: 4px;
    width: 300px;
  }
</style>
