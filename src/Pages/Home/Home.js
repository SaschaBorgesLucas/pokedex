import Deck from '../../Components/Deck';
import { PokemonProvider } from '../../Components/Pokemon/PokemonContext';
import { getMaxpokemonCount } from '../../Components/Pokemon';
import {ThemeTogglerProvider, ThemeTogglerButton} from '../../Components/ThemeToggler';
import AddPokemonsButton from '../../Components/AddPokemonsButton'
import { useState, useEffect } from 'react';

const Home = () => {
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
      <ThemeTogglerProvider>
        <ThemeTogglerButton />
            <PokemonProvider id={pokemonList}>
                <Deck />
            </PokemonProvider>
        <AddPokemonsButton label="add" onClick={addPokemonToList} />
        <AddPokemonsButton label="Reset" onClick={resetPokemonList} />
        <h1> {maxPokemonCount} / {pokemonList.length}</h1>
      </ThemeTogglerProvider>
    </>
  );
}



export default Home;