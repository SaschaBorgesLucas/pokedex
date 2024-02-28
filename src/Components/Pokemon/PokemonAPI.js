import { SimplePokemon } from "./"

async function getPokemon(pokemonID){
  try 
  {
    const apiResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`);
    const data = await apiResponse.json();
    const pokemonInstance = new SimplePokemon();
    pokemonInstance.setInfo(data);
    console.log(pokemonInstance);
    return pokemonInstance;
  }    
  catch (error) 
  {
    throw error;
  }
}

async function getMaxpokemonCount (){
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon-species/');
    const data = await response.json();
    return data.count; // Este é o número total de Pokémon disponíveis
  } catch (error) {
    console.error('Erro ao obter o número máximo de Pokémon:', error);
    return -1; // Retorna -1 em caso de erro
  }
}

export { getPokemon , getMaxpokemonCount }