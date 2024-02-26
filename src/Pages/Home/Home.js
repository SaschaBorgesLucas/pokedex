import Deck from '../../Components/Deck';
import { PokemonProvider } from '../../Components/Pokemon/PokemonContext';
import {ThemeTogglerProvider, ThemeTogglerButton} from '../../Components/ThemeToggler';
import AddPokemonsButton from '../../Components/AddPokemonsButton'


const Home = () => {
  const buscalista = [1,2,3,4,5,6,7,8,9,10]
  return (
    <>
      <ThemeTogglerProvider>
        <ThemeTogglerButton/>
            <PokemonProvider id={buscalista}>
                <Deck/>
            </PokemonProvider>
        <AddPokemonsButton/>
      </ThemeTogglerProvider>
    </>
  );
}

export default Home;