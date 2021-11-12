<script lang="ts">
import LoginModal from "./components/LoginModal.svelte";
import Navbar from "./components/Navbar.svelte";

//stores
import modals from './stores/modals';
</script>

<main>
	<Navbar/>
  {#if $modals.loginModal.show}
     <LoginModal/>
  {/if}
  <div>There will be flashcards here soon.</div>
  <div>Maybe even some decks full of flashcards...</div>
</main>

<style>
  div {
    margin: 10px 20px;
  }
  .login {
    font-weight: bold;
  }
</style>