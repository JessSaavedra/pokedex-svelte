<script>
  export let classname;
  export let pokemon;
</script>

{#if pokemon.sprites}
  <img class={classname} src={pokemon.sprites.front_default} alt={pokemon.name}/>
{/if}

<style>
  .selected {
    bottom: 0;
    left: 0;
    position: absolute;
    height: 4.5rem;
  }

  .common {
    align-self: flex-end;
    margin-left: auto;
    position: relative;
    z-index: 1;
  }
</style>
