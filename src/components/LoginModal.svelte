<script>
  import modals from "../stores/modals";
  
  const handleClickOutside = () => {
    $modals.loginModal.show = false;
  };
</script>

<div class="modalBackground" on:click={handleClickOutside} />
<div class={"modal"}>
  <div class="title">Login</div>
</div>

<style>
</style>
