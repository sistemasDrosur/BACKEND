<script>
  let text = "";
  let alertMessage = "";
  let searchInput;
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(text);
  };
</script>

<div class="search-bar">
  <form action="" on:submit={handleSubmit}>
    <input
      type="text"
      placeholder="Busca el usuario aquí"
      bind:value={text}
      bind:this={searchInput}
    />
    <button class="search-button" type="submit">Buscar</button>
  </form>
</div>

<style>
  .search-bar {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0px;
  }

  form {
    display: flex;
    flex-direction: column;
    padding: 20px;
  }

  input {
    min-width: 300px;
    text-align: center;
    font-size: 20px;
  }

  button {
    cursor: pointer;
  }

  .search-button {
    border: 1px solid blue;
    color: blue;
  }
</style>
