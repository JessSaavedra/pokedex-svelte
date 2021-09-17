<script>
  import getBackgroundColor from '../utils/getBackgroundColor';

  export let url;
  export let onClick;
  import { onMount } from 'svelte';
  import Sprite from './Sprite.svelte';

  let pokemon = {};
  let types = [];
  let backgroundColor = '';

  onMount(async () => {
    const res = await fetch(url);
    pokemon = await res.json();
    types = pokemon.types;
    backgroundColor = getBackgroundColor(types);
  });

</script>

<div class="pokemon" style="--background-color: {backgroundColor}" on:click={onClick}>
  {#if pokemon}
    <div>
      <p class="name">{pokemon.name}</p>
      {#each types as pokemonType}
        <p class="type">{pokemonType.type.name}</p>
      {/each}
    </div>
    <Sprite pokemon={pokemon} classname="common"/>
  {/if}
</div>

<style>
  .pokemon {
    align-items: flex-start;
    background-color: var(--background-color);
    border-radius: 2em;
    box-shadow: 0 0 2em 0 rgba(0, 0, 0, 0.08);
    cursor: pointer;
    display: flex;
    grid-column-end: span 3;
    overflow: hidden;
    padding: 1em;
    position: relative;
  }

  .pokemon::after {
    background-image: url('/pokeball.png');
    background-position: calc(100% + 2rem) calc(100% + 2rem);
    background-repeat: no-repeat;
    background-size: 10rem;
    bottom: 0;
    content: '';
    height: 100%;
    filter: invert(100%);
    opacity: 20%;
    position: absolute;
    right: 0;
    width: 100%;
  }

  .name {
    color: white;
    font-weight: 500;
    margin-top: 0;
    text-transform: capitalize;
  }

  .type {
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 2rem;
    padding: 0.25em 1em;
  }
</style>
