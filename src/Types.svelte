<script>
  export let types;
</script>

<h2>Types</h2>
{#each types as pokemonType}
  <p>{pokemonType.type.name}</p>
{/each}
