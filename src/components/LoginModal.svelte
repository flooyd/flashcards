<script>
import App from "../App.svelte";

  //stores
  import modals from "../stores/modals";
  import user from "../stores/user";
  
  let username = '';
  let password = '';
  const handleClickOutside = () => {
    $modals.loginModal.show = false;
    $user.auth = true;
  };

  const handleClickRegister = () => {
    $modals.loginModal.register = true;
  };

  const handleClickLogin = () => {
    $modals.loginModal.register = false;
  };

  const handleSubmitRegister = async () => {
    //const response = await fetch('http://localhost:5001/api/auth/register')
    handleSubmitLogin()
  };

  const handleSubmitLogin = () => {
    console.log("login");
    //const response = await fetch
    $modals.loginModal.show = false;
  };

  const handleInput = e => {
    if(e.target.name === 'username') username = e.target.value;
    if(e.target.name === 'password') password = e.target.value;
  }
</script>

<div class="modalBackground" on:click={handleClickOutside} />
<div class="modal">
  <div>
    <div class="title">
      {$modals.loginModal.register ? "Register" : "Login"}
    </div>
    {#if $modals.loginModal.register}
      <div class="message">
        <div>Already have an account?</div>
        <button on:click={handleClickLogin}>Login</button>
      </div>
    {/if}
    {#if !$modals.loginModal.register}
      <div class="message">
        <div>Don't have an account?</div>
        <button on:click={handleClickRegister}>Register</button>
      </div>
    {/if}
  </div>
  <div class="fields">
    <label for="username">Username</label>
    <input type="text" name="username" on:input={handleInput} />
    <label for="username">Password</label>
    <input type="text" name="password" on:input={handleInput} />
  </div>
  <div class="buttons">
    <button on:click={handleClickOutside}>Cancel</button>
    <button
      on:click={$modals.loginModal.register
        ? handleSubmitRegister
        : handleSubmitLogin}
      >{$modals.loginModal.register ? "Register" : "Login"}</button
    >
  </div>
</div>

<style>
  .modal {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .message {
    font-size: 13px;
    margin-top: 10px;
    display: flex;
    align-items: center;
  }

  .message div {
    font-style: italic;
    margin-right: 13px;
  }

  .fields {
    display: flex;
    flex-direction: column;
  }

  input {
    max-width: 300px;
    margin: 5px 0px;
    border: 1px solid #333;
  }

  .buttons {
    text-align: right;
  }

  button {
    background: white;
    border: 1px solid #333;
    cursor: pointer;
    padding: 0px 8px;
  }

  button:hover {
    color: white;
    background: #333;
  }
</style>
