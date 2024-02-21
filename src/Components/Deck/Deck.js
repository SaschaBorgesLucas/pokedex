import { useContext } from 'react';
import { PokemonContext } from '../Pokemon';
import Card from '../Card'

const Deck = () =>{
    const pokemons = useContext(PokemonContext);
    if (!pokemons || pokemons.length === 0) {
        return <div>Carregando...</div>;
    }
    return(
        <div>
            {pokemons.map((pokemon) =>(
                    <Card key={pokemon.id} 
                          id={pokemon.id} 
                          name={pokemon.name}
                    />
        ))}
        </div>
  
    );
}

export default Deck;
