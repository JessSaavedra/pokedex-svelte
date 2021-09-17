<script>
  import Sprite from './Sprite.svelte';

  export let pokemon;
  export let typeColor;
</script>

<div class="title" style="--type-color: {typeColor}">
  <Sprite pokemon={pokemon} classname="selected"/>
  <h1 class="number">{`N.º ${pokemon.order}`}</h1>
  <h1 class="name">{pokemon.name}</h1>
</div>

<style>
  .name {
    margin-left: 4em;
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

  h1 {
    margin: 0.5em 0;
    position: relative;
    z-index: 1;
  }
</style>
