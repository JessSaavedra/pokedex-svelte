<script>
  export let url;
  export let onClick;
  import { onMount } from 'svelte';

  let pokemon = {};
  let types = [];

  onMount(async () => {
    const res = await fetch(url);
    pokemon = await res.json();
    types = pokemon.types;
  });

</script>

<div class="pokemon" on:click={onClick}>
  {#if pokemon}
    <p>{pokemon.name}</p>
    {#if pokemon.sprites}
      <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
    {/if}
    {#each types as pokemonType}
      <p>{pokemonType.type.name}</p>
    {/each}
  {/if}
</div>

<style>
  .pokemon {
    border-radius: 2em;
    box-shadow: 0 0 2em 0 rgba(0, 0, 0, 0.08);
    grid-column-end: span 3;
    padding: 1em;
  }
</style>
