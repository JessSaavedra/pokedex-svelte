<script>
  export let abilities = [];
</script>

<h2>Abilities</h2>
{#each abilities as pokemonAbility}
  <p>{pokemonAbility.ability.name}</p>
{/each}
