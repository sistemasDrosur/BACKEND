<script>
  import Card from "./Card.svelte";
  import axios from "axios";
  import { onMount } from "svelte";

  let users = [];

  const getUsers = () => {
    axios.get("http://localhost:3000/api/users").then((res) => {
      users = res.data;
    });
  };

  onMount(getUsers);
</script>

<div class="users">
  <h1 class="users-title">Lista de usuarios</h1>
  {#await users}
    <h2>Loading....</h2>
  {:then users}
    <ul>
      <div class="user-content">
        {#each users as usuario}
          <Card>
            <li>
              <h2>{usuario.nombreusuario}</h2>
              <h3>{usuario.idusuarios}</h3>
              <h3>{usuario.cargousuario}</h3>
              <h3>{usuario.areausuario}</h3>
              <h3>{usuario.sucursal}</h3>
            </li>
          </Card>
        {/each}
      </div>
    </ul>
  {:catch err}
    <h2>Error while loading the data {err}</h2>
  {/await}
</div>

<style>
  .users {
    padding: 2rem;
    text-align: center;
  }

  ul {
    list-style: none;
  }

  .user-content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem;
    justify-content: center;
  }
</style>
