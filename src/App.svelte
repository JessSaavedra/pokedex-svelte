<script>
	import { onMount } from 'svelte';
	import Pokemon from './Pokemon.svelte';
	import SelectedPokemon from './SelectedPokemon.svelte';
	import PokemonRepository from '../repositories/PokemonRepository';

	let pokemons = [];
	let selectedPokemonUrl;

	onMount(async () => {
		pokemons = await new PokemonRepository().getAll();
	});

	function selectPokemon(event, pokemonUrl) {
		selectedPokemonUrl = pokemonUrl;
	}

</script>

<svelte:head>
	<title>Pokedex</title>
</svelte:head>

<main>
	<div class="pokedex">
		<SelectedPokemon url={selectedPokemonUrl}/>
		{#each pokemons as pokemon}
			<Pokemon url={pokemon.url} onClick={(event) => selectPokemon(event, pokemon.url)}/>
		{:else}
			<p>loading...</p>
		{/each}
	</div>
</main>

<style>
	:global(body) {
		padding: 0;
	}

	main {
		margin: 0 auto;
		max-width: 70rem;
	}

	.pokedex {
		display: grid;
		gap: 1em;
		grid-template-columns: repeat(12, 1fr);
	}
</style>
