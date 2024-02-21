import Deck from './Components/Deck';
import { PokemonProvider } from './Components/Pokemon/PokemonContext';
import './App.css';

function App() {
  const buscalista = [1,2,3,4,5,6,7,8,9,10]
  return (
    <>
      <PokemonProvider id={buscalista}>
        <Deck/>
      </PokemonProvider>
    </>
  );
}

export default App;
