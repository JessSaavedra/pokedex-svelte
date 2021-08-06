<script>
  export let url = 'https://pokeapi.co/api/v2/pokemon/1';
  import { beforeUpdate } from 'svelte';

  let pokemon = {};
  let types = [];
  let abilities = [];
  let moves = [];

  beforeUpdate(async () => {
    const res = await fetch(url);
    pokemon = await res.json();
    types = pokemon.types;
    abilities = pokemon.abilities;
    moves = pokemon.moves;
  });

</script>

<div class="pokemon">
  {#if pokemon}
    <div>
      <h1 class="name">{pokemon.name}</h1>
      {#if pokemon.sprites}
        <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
      {/if}
      {#if pokemon.sprites}
        <img src={pokemon.sprites.back_default} alt={pokemon.name}/>
      {/if}
    </div>
    <div>
      <h2>Types</h2>
      {#each types as pokemonType}
        <p>{pokemonType.type.name}</p>
      {/each}
      <h2>Abilities</h2>
      {#each abilities as pokemonAbility}
        <p>{pokemonAbility.ability.name}</p>
      {/each}
    </div>
    <div>
      <h2>Moves</h2>
      <div class="moves">
        {#each moves as pokemonMove}
          <p class="move">{pokemonMove.move.name}</p>
        {/each}
      </div>
    </div>
  {/if}
</div>

<style>
  .pokemon {
    display: flex;
    gap: 2em;
    grid-column-end: span 12;
    justify-content: space-between;
  }

  .moves {
    display: flex;
    flex-wrap: wrap;
  }

  .move {
    background-color: beige;
    border-radius: 2rem;
    margin: 0.25em;
    padding: 0.5em 1em;
  }

  .name {
    text-transform: capitalize;
  }
</style>
