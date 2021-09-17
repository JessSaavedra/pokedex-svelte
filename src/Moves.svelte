<script>
  export let moves = [];
</script>

<h2>Moves</h2>
<div class="moves">
  {#each moves as pokemonMove}
    <p class="move">{pokemonMove.move.name}</p>
  {/each}
</div>

<style>
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
</style>
