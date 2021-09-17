<script>
  export let url;

  import { beforeUpdate } from 'svelte';
  import getBackgroundColor from '../utils/getBackgroundColor';
  import isEmpty from '../utils/isEmpty';

  import PokemonRepository from '../repositories/PokemonRepository';
  import Moves from './Moves.svelte';
  import Types from './Types.svelte';
  import Abilities from './Abilities.svelte';
  import Info from './Info.svelte';

  let pokemon = {};
  let typeColor;

  $: isLoading = isEmpty(pokemon)

  beforeUpdate(async () => {
    pokemon = await new PokemonRepository().get(url)
    typeColor = getBackgroundColor(pokemon.types);
  });

</script>

{#if isLoading}
  <div class="pokemon">
    <Info pokemon={pokemon} typeColor={typeColor}/>
    <div class="grid">
      <div>
        <Types types={pokemon.types}/>
        <Abilities abilities={pokemon.abilities} />
      </div>
      <div>
        <Moves moves={pokemon.moves} />
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
