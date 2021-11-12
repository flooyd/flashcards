<script>
  import LoginModal from "./LoginModal.svelte";

  import modals from "../stores/modals";
  import user from "../stores/user";
  const handleClickLogin = () => {
    $modals.loginModal.show = true;
    console.log("hi");
  };
</script>

<nav>
  <div class="title">Flashcards</div>
  <div class="options">
    {#if !$modals.loginModal.show && !$user.auth}
      <div on:click={handleClickLogin}>Login</div>
    {/if}
    {#if $user.auth}
      <div class="user">Logged in as: {$user.username}</div>
    {/if}
    <div>About</div>
  </div>
</nav>

<style>
  nav {
    display: flex;
    align-items: center;
    font-size: 20px;
    justify-content: space-between;
    background: lightblue;
    padding: 8px 20px;
    border-bottom: 1px solid rgba(0, 0, 255, 0.5);
  }

  .title {
    font-size: 25px;
    font-weight: bold;
  }

  .options {
    display: flex;
    align-items: center;
  }

  .options div {
    margin-left: 20px;
  }

  .options div:hover {
    cursor: pointer;
    color: white;
  }
</style>
