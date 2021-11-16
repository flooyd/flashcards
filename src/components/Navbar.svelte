<script>
  //stores
  import modals from "../stores/modals";
  import user from "../stores/user";
  
  const handleClickLogin = () => {
    $modals.loginModal.show = true;
  };

  const handleClickUsername = () => {
    $user.token = null
    $user.username = null;
    localStorage.removeItem('token');
    localStorage.removeItem('username');
  }
</script>

<nav>
  <div class="title">Flashcards</div>
  <div class="options">
    {#if !$user.token}
      <div on:click={handleClickLogin}>Login/Register</div>
    {/if}
    {#if $user.token}
      <div class="username" on:click={handleClickUsername}>{$user.username}</div>
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
    padding: 10px 20px;
    box-shadow: 0 -0.4rem 0.9rem 0.2rem #00000080;
    line-height: 25px;
  }

  .title {
    font-size: 25px;
    font-weight: bold;
  }

  .options {
    display: flex;
    align-items: center;
  }

  .username {
    color: white;
  }

  .options div {
    margin-left: 20px;
  }

  .options div:hover {
    cursor: pointer;
    color: white;
  }
</style>
