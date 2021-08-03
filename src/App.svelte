<script>
	import { onMount } from 'svelte';
	import Pokemon from './Pokemon.svelte';

	let pokemons = [];

	onMount(async () => {
		const res = await fetch(`https://pokeapi.co/api/v2/pokemon`);
		let response = await res.json();
		pokemons = response.results
	});

</script>

<main>
	<div class="pokemons">
		{#each pokemons as pokemon}
			<Pokemon url={pokemon.url}/>
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

	.pokemons {
		display: grid;
		gap: 1em;
		grid-template-columns: repeat(12, 1fr);
	}
</style>
