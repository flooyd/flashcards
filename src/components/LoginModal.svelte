<script>
  import App from "../App.svelte";

  //stores
  import modals from "../stores/modals";
  import user from "../stores/user";

  let username = "";
  let password = "";
  let registerErr = "";
  let loginErr = "";
  let loading = false;

  document.onkeypress = (event) => {
    if(event.keyCode === 13) {
      if($modals.loginModal.register) {
        handleSubmitRegister();
      } else {
        handleSubmitLogin();
      }
    }
  }

  const resetErrorsAndFields = () => {
    loginErr = "";
    registerErr = "";
    username = "";
    password = "";
  }

  const handleClickOutside = () => {
    $modals.loginModal.show = false;
    resetErrorsAndFields();
  };

  const handleClickRegister = () => {
    $modals.loginModal.register = true;
    resetErrorsAndFields();
  };

  const handleClickLogin = () => {
    $modals.loginModal.register = false;
    resetErrorsAndFields();
  };

  const handleSubmitRegister = async () => {
    let obj = { password, username };
    try {
      loading = true;
      const response = await fetch("http://localhost:5001/api/auth/register", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        handleSubmitLogin();
      } else {
        registerErr = "This username is already registered.";
        loading = false;
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmitLogin = async () => {
    loading = true;
    try {
      const response = await fetch("http://localhost:5001/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if(response.status === 200) {
        const json = await response.json();
        $user.token = json.token;
        $user.username = json.user.username
        storeUser(json.token, json.user.username);
        $modals.loginModal.show = false;
      } else {
        loginErr = 'Invalid credentials.'
        loading = false;
      }
    } catch (err) {
      console.log(err);
    }
  };

  const storeUser = (token, username) => {
    localStorage.setItem('token', token)
    localStorage.setItem('username', username )
  }

  const handleInput = (e) => {
    if (e.target.name === "username") username = e.target.value;
    if (e.target.name === "password") password = e.target.value;
  };
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
    {#if registerErr}
      <div class="error">{registerErr}</div>
    {/if}
    {#if loginErr}
      <div class="error">{loginErr}</div>
    {/if}
  </div>
  <div class="fields">
    <label for="username">Username</label>
    <input type="text" name="username" bind:value={username} />
    <label for="username">Password</label>
    <input type="password" name="password" bind:value={password} />
  </div>
  {#if !loading}
    <div class="buttons">
      <button on:click={handleClickOutside}>Cancel</button>
      <button
        on:click={$modals.loginModal.register
          ? handleSubmitRegister
          : handleSubmitLogin}
        >{$modals.loginModal.register ? "Register" : "Login"}</button
      >
    </div>
  {/if}
  {#if loading}
    <div class="buttons">Loading...</div>
  {/if}
</div>

<style>
  .modal {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .message,
  .error {
    font-size: 13px;
    margin-top: 10px;
    display: flex;
    align-items: center;
  }

  .error {
    color: red;
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
    padding: 8px;
  }

  .buttons {
    text-align: right;
    height: 22px;
  }

  button {
    margin-left: 8px;
  }
</style>
