<script lang="ts">
  //svelte
  import { onMount } from "svelte";
import CardCreator from "./components/CardCreator.svelte";
import CardsContainer from "./components/CardsContainer.svelte";
import DeckCreator from "./components/DeckCreator.svelte";

  //components
  import DeckHeader from "./components/DeckHeader.svelte";
  import LoginModal from "./components/LoginModal.svelte";
  import Navbar from "./components/Navbar.svelte";
import cards from "./stores/cards";
  import createMode from "./stores/createMode";

  //stores
  import modals from "./stores/modals";
import selectedDeck from "./stores/selectedDeck";
  import user from "./stores/user";

  onMount(() => {
    if (localStorage.getItem("token")) {
      $user.token = localStorage.getItem("token");
      $user.username = localStorage.getItem("username");
    }
  });

  $: console.log($selectedDeck)
</script>

<main>
  <Navbar />
  {#if $modals.loginModal.show}
    <LoginModal />
  {/if}
  {#if $user.token && $createMode === ''}
    <DeckHeader />
  {/if}
  {#if $createMode === 'deck'}
     <DeckCreator/>
  {/if}
  {#if $createMode === 'card'}
     <CardCreator/>
  {/if}
  {#if $cards.length > 0 && $createMode === ''}
     <CardsContainer/>
  {/if}
  {#if !$user.token}
    <div>There will be flashcards here soon.</div>
    <div>Maybe even some decks full of flashcards...</div>
  {/if}
</main>

<style>
  
</style>
