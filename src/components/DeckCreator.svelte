<script>
  import createMode from "../stores/createMode";

  import selectedDeck from "../stores/selectedDeck";

  import user from "../stores/user";

  let name = "";
  let loading = false;

  const handleSubmit = async (event) => {
    event.preventDefault();
    loading = true;
    try {
      const response = await fetch("http://localhost:5001/api/decks", {
        method: "POST",
        body: JSON.stringify({ name }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${$user.token}`,
        },
      });
      if (response.status === 200) {
        const json = await response.json();
        $selectedDeck.name = json.name;
        $selectedDeck.id = json.id;
        $createMode = "";
      } else {
        console.log("unique error?");
      }
    } catch (err) {
      console.log(err);
    }
  };
</script>

<div class="deckCreator">
  <div class="title">Create Deck</div>
  {#if loading}
    Loading...
  {:else}
    <form on:submit={handleSubmit}>
      <label for="name">Name</label>
      <input type="text" name="name" bind:value={name} />
      <button>Create</button>
    </form>
  {/if}
</div>

<style>
  .title {
    margin-bottom: 20px;
  }
  .deckCreator {
    margin: 20px;
  }
</style>
