<script lang="ts">
  //components
  import LoginModal from "./components/LoginModal.svelte";
  import Navbar from "./components/Navbar.svelte";

  //stores
  import modals from "./stores/modals";
  import user from "./stores/user";
</script>

<main>
  <Navbar />
  {#if $modals.loginModal.show}
    <LoginModal />
  {/if}
  {#if $user.auth}
    <div>Show Stuff...</div>
  {/if}
  {#if !$user.auth}
    <div>There will be flashcards here soon.</div>
    <div>Maybe even some decks full of flashcards...</div>
  {/if}
</main>

<style>
  div {
    margin: 10px 20px;
  }
</style>
