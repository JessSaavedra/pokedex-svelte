<script>
  import getBackgroundColor from "../utils/getBackgroundColor";

  export let url = 'https://pokeapi.co/api/v2/pokemon/1';
  import { beforeUpdate } from 'svelte';

  let pokemon = {};
  let types = [];
  let abilities = [];
  let moves = [];
  let typeColor = '';

  beforeUpdate(async () => {
    const res = await fetch(url);
    pokemon = await res.json();
    types = pokemon.types;
    abilities = pokemon.abilities;
    moves = pokemon.moves;
    typeColor = getBackgroundColor(types[0].type);
  });

</script>

<div class="pokemon">
  {#if pokemon}
    <div class="title" style="--type-color: {typeColor}">
      {#if pokemon.sprites}
        <img class="sprite" src={pokemon.sprites.front_default} alt={pokemon.name}/>
      {/if}
      <h1 class="number">{`N.º ${pokemon.order}`}</h1>
      <h1 class="name">{pokemon.name}</h1>
    </div>
    <div class="grid">
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
    </div>
  {/if}
</div>

<style>
  .pokemon {
    gap: 2em;
    grid-column-end: span 12;
    justify-content: space-between;
    margin-bottom: 2rem;
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

  .title {
    background-color: black;
    color: white;
    display: flex;
    padding-left: 5em;
    position: relative;
  }

  .title::before {
    background-color: var(--type-color);
    content: '';
    height: 100%;
    position: absolute;
    left: 0;
    width: 13rem;
  }

  .title::after {
    border-bottom: 4.25rem solid var(--type-color);
    border-right: 2rem solid transparent;
    box-sizing: border-box;
    content: '';
    height: 100%;
    left: 13rem;
    position: absolute;
    top: 0;
    width: 2rem;
  }

  .title h1 {
    margin: 0.5em 0;
    position: relative;
    z-index: 1;
  }

  .title .name {
    margin-left: 4em;
  }

  .sprite {
    bottom: 0;
    left: 0;
    position: absolute;
    height: 4.5rem;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 4fr;
  }

  .grid > * {
    padding: 0 1em;
  }

</style>
