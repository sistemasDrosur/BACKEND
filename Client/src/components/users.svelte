<script>
  import axios from "axios";
  import { onMount } from "svelte";

  let users = [];

  const getUsers = () => {
    axios.get("http://localhost:3000/api/users").then((res) => {
      users = res.data;
      console.log(res);
    });
  };

  onMount(getUsers);
</script>

<div>
  <h1>Lista de usuarios</h1>
  {#await users}
    <h2>Loading....</h2>
  {:then users}
    <ul>
      {#each users as usuario}
        <li>{usuario.nombreusuario}</li>
      {/each}
    </ul>
  {:catch err}
    <h2>Error while loading the data {err}</h2>
  {/await}
</div>
