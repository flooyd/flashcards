<script lang="ts">
  //svelte
  import { onMount } from "svelte";
import DeckCreator from "./components/DeckCreator.svelte";

  //components
  import DeckHeader from "./components/DeckHeader.svelte";
  import LoginModal from "./components/LoginModal.svelte";
  import Navbar from "./components/Navbar.svelte";
  import createMode from "./stores/createMode";

  //stores
  import modals from "./stores/modals";
  import user from "./stores/user";

  onMount(() => {
    if (localStorage.getItem("token")) {
      $user.token = localStorage.getItem("token");
      $user.username = localStorage.getItem("username");
    }
  });
</script>

<main>
  <Navbar />
  {#if $modals.loginModal.show}
    <LoginModal />
  {/if}
  {#if $user.token && !$createMode.creating}
    <DeckHeader />
  {/if}
  {#if $createMode.creating && $createMode.mode === 'deck'}
     <DeckCreator/>
  {/if}
  {#if !$user.token}
    <div>There will be flashcards here soon.</div>
    <div>Maybe even some decks full of flashcards...</div>
  {/if}
</main>

<style>
  div {
    margin: 20px 20px;
  }
</style>
