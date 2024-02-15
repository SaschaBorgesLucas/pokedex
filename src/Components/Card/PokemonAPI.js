import PokemonListItem from "./PokemonListItem"

async function getPokemon(pokemonID){
    try 
    {
      const apiResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`);
      const data = await apiResponse.json();
      const pokemonInstance = new PokemonListItem();
      pokemonInstance.setInfo(data);
      console.log(pokemonInstance);
      return pokemonInstance;
    }
    
    catch (error) 
    {
      throw error;
    }
  }

export default getPokemon