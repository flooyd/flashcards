<script>
  import modals from '../stores/modals';

  const handleClickOutside = () => {
    $modals.loginModal.show = false;
  };
</script>

<div class='modalBackground' on:click={handleClickOutside} />
<div class='modal'>
  <div>
    <div class='title'>Login</div>
    <div class="message">Logging in for the first time will create your account...</div>
  </div>
  <div class='fields'>
    <label for='username'>Username</label>
    <input type='text' name='username' />
    <label for='username'>Password</label>
    <input type='text' name='password' />
  </div>
  <div class='buttons'>
    <button on:click={handleClickOutside}>Cancel</button>
    <button>Login</button>
    
  </div>
</div>

<style>
  .modal {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .message {
    font-style: italic;
    font-size: 13px;
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
