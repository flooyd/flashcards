<script>
  let name = "";

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("hi");
  };
</script>

<div class="deckCreator">
  <div class="title">Create Deck</div>
  <form on:submit={handleSubmit}>
    <label for="name">Name</label>
    <input type="text" name="name" bind:value={name} />
    <button>Create</button>
  </form>
</div>

<style>
  .title {
    margin-bottom: 20px;
  }
  .deckCreator {
    margin: 20px;
  }
</style>
