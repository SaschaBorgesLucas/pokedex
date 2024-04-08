import Deck from '../../Components/Deck';
import { PokemonProvider } from '../../Components/Pokemon/PokemonContext';
import { getMaxpokemonCount } from '../../Components/Pokemon';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { PokemonListControls } from '../../Components/PokemonListControls';
import { ThemeContext } from '../../Components/ThemeToggler/ThemeTogglerProvider';
import React, { useContext } from 'react';

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const firstPokemonList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [maxPokemonCount, setMaxPokemonCount] = useState(0);
  const [pokemonLenght, setPokemonLengh] = useState(10);
  const [pokemonList, setPokemonList] = useState(() => {
    const storedList = localStorage.getItem('pokemonList');
    return storedList ? JSON.parse(storedList) : firstPokemonList;
  });
  
  async function fillhMaxPokemonId() {
    try {
      const maxPokemonId = await getMaxpokemonCount();
      return maxPokemonId;
    } catch (error) {
      console.error('Erro ao obter o número máximo de Pokémon:', error);
      return -1;
    }
  }
  async function UseMaxPokemonId() {
    try {
      const teste = await fillhMaxPokemonId();
      setMaxPokemonCount(teste);
    } catch (error) {
      console.error('Erro ao obter o número máximo de Pokémon:', error);
    }
  }
  UseMaxPokemonId();

  useEffect(() => {
    localStorage.setItem('pokemonList', JSON.stringify(pokemonList));
  }, [pokemonList]);
  
  function addPokemonToList (){
    if (maxPokemonCount-pokemonList.length <= 0){
      return;
    } if ( maxPokemonCount - pokemonList.length - 10  <=  10){
      setPokemonLengh(maxPokemonCount - pokemonList.length - 10);
      const nextList = Array.from({ length: pokemonLenght }, (_, index) => pokemonList.length + index + 1);
      setPokemonList(prevList=>[...prevList, ...nextList]);
    }
    else{
      const nextList = Array.from({ length: pokemonLenght }, (_, index) => pokemonList.length + index + 1);
      setPokemonList(prevList=>[...prevList, ...nextList]);
    } 
  }
  
  function resetPokemonList() {
    setPokemonLengh(10);
    setPokemonList(firstPokemonList);
  }
  
  return (
    <>
      <Main>
        <PokemonProvider id={pokemonList}>
   
          <Sides MainColor={theme.MainColor}>
          </Sides>
  
          <Content MainColor={theme.MainColor} MidColor={theme.MidColor} BotColor={theme.BotColor}>
            <Deck />
          </Content>

          <Sides MainColor={theme.MainColor}>
            <PokemonListControls 
              maxPokemonCount= { maxPokemonCount } 
              currentPokemonCont= { pokemonList.length } 
              add5ItensToList= { addPokemonToList }
              reset = {resetPokemonList}
              isItVisible = {false}
            />
          </Sides>

        </PokemonProvider>
      </Main>   
    </>
  );
}

const Main = styled.div`
  background: ${(props) => props.MainColor};
  display: flex;
`
const Content = styled.div`
    width: 70%;
    padding: 5%;
    background-color: lightgreen;
    justify-content: center;
    align-items: center;
    
    border-radius: 18px;
    background: ${(props) => props.MainColor};
    box-shadow: inset -8px -8px 12px ${(props) => props.MidColor},
                inset 8px 8px 12px ${(props) => props.MainColor};
`
const Sides = styled.div`
  width: 10%;
  background: ${(props) => props.MainColor};
`


export default Home;