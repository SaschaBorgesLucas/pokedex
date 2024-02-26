import { useContext } from 'react';
import { PokemonContext } from '../Pokemon';
import Card from '../Card'
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
    padding:30px, 30px;
    display: flex;
    flex-wrap: wrap;
    background-color: yellow;
    align-content: space-arrond;
`

export default Deck;
