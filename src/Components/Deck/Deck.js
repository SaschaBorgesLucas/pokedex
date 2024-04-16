import { useContext } from 'react';
import { PokemonContext } from '../../Providers';
import { Card } from '../Card';
import styled from 'styled-components';

const Deck = () =>{
    const pokemons = useContext(PokemonContext);
    if (!pokemons || pokemons.length === 0) {
        return <div>Carregando...</div>;
    }
    return(
        <Ul>
            {pokemons.map((pokemon) =>(
                    <Card key={pokemon.id} 
                          id={pokemon.id} 
                          name={pokemon.name}
                    />
        ))}
        </Ul>
  
    );
}

const Ul = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export { Deck };
