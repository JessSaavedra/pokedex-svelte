<script>
  import getBackgroundColor from '../utils/getBackgroundColor';

  export let url = 'https://pokeapi.co/api/v2/pokemon/1';
  import { beforeUpdate } from 'svelte';
  import Moves from './Moves.svelte';
  import Types from './Types.svelte';
  import Abilities from './Abilities.svelte';
  import isEmpty from '../utils/isEmpty';
  import PokemonRepository from '../repositories/PokemonRepository';
  import Info from './Info.svelte';

  let pokemon = {};
  let types = [];
  let abilities = [];
  let moves = [];
  let typeColor = '';

  $: isLoading = isEmpty(pokemon)

  beforeUpdate(async () => {
    pokemon = await new PokemonRepository().get(url)
    types = pokemon.types;
    abilities = pokemon.abilities;
    moves = pokemon.moves;
    typeColor = getBackgroundColor(types[0].type);
  });

</script>

{#if isLoading}
  <div class="pokemon">
    <Info pokemon={pokemon} typeColor={typeColor}/>
    <div class="grid">
      <div>
        <Types types={types} />
        <Abilities abilities={abilities} />
      </div>
      <div>
        <Moves moves={moves} />
      </div>
    </div>
  </div>
{:else}
  <p>loading...</p>
{/if}

<style>
  .pokemon {
    gap: 2em;
    grid-column-end: span 12;
    justify-content: space-between;
    margin-bottom: 2rem;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 4fr;
  }

  .grid > * {
    padding: 0 1em;
  }
</style>
