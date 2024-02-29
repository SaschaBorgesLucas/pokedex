import { SimplePokemon } from "./"
import { PokemonComplet } from "./";

async function getPokemon(pokemonID){
  try 
  {
    const apiResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`);
    const data = await apiResponse.json();
    const pokemonInstance = new SimplePokemon();
    pokemonInstance.setInfo(data);
    return pokemonInstance;
  }    
  catch (error) 
  {
    throw error;
  }
}

async function getPokemonComplet(pokemonID){
  try{
    const apiResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`);
    const data = await apiResponse.json();
    
    const pokemonAbilities = await Promise.all(data.abilities.map(async (ability) => {
      const response = await fetch(ability.ability.url);
      const abilityData = await response.json();
      return {
        name: abilityData.name,
        description: abilityData.effect_entries.find(entry => entry.language.name === 'en').effect
      };
    }));

    const pokemonInstance = new PokemonComplet();
    pokemonInstance.setInfo(data);
    pokemonInstance.abilities = pokemonAbilities;
    
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

export { getPokemon, getPokemonComplet, getMaxpokemonCount }