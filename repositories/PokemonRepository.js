class PokemonRepository {
  async getAll() {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon`);
    let response = await res.json();
    return response.results
  }

  async get(url) {
    const res = await fetch(url);
    return await res.json();
  }
}

export default PokemonRepository
