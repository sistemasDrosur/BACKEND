<script>
  import Card from "./Card.svelte";
  import SearchBar from "./SearchBar.svelte";
  import { onMount } from "svelte";
  import { loading, users } from "../store/store";

  let usuario = [];

  const getUsers = async () => {
    users.set([]);
    loading.set(true);
    const res = await fetch("http://localhost:3000/api/users");
    const data = await res.json();
    setTimeout(() => {
      users.set(data);
      loading.set(false);
    }, 2000);
  };

  onMount(getUsers);
</script>

<div class="users">
  <h1 class="users-title">Lista de usuarios</h1>
  <SearchBar />
  <ul>
    <div class="user-content">
      {#if $loading === true}
        <h2 class="loading">Loading ....</h2>
      {:else}
        {#each $users as usuario}
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
      {/if}
    </div>
  </ul>
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
