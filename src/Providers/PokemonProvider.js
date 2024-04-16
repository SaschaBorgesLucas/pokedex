import { getPokemon } from "../Components/Pokemon";
import { createContext, useState, useEffect } from "react";

const PokemonContext = createContext( { } )

const PokemonProvider=(props)=>{
    const [pokemons, setPokemons] = useState([]);
    useEffect(() => {const fetchData = async () => {
        try {
          const promises = props.id.map(async (pokemonIndex) => {
            const pokemonData = await getPokemon(pokemonIndex);
            return pokemonData;
          });
          const pokemonList = await Promise.all(promises);
          setPokemons(pokemonList);
        } catch (error) {
          console.error('Erro ao obter dados do Pokémon');
        }
      };
      fetchData();
    }, [props.id]);
    return(
        <>
          <PokemonContext.Provider value={pokemons} id={props.id}>
              {props.children}
          </PokemonContext.Provider>
        </>
    );
}

export { PokemonContext, PokemonProvider };