import PokemonRouters from './Pages/PokemonRoutes';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import React, { useContext } from 'react';
import { ThemeContext } from './Components/ThemeToggler/ThemeTogglerProvider';
import styled from 'styled-components';

function App(props) {
  const { theme } = useContext(ThemeContext);
  return (
    <Div MainColor={theme.MainColor}>
      <Header />
      <PokemonRouters />
      <Footer />
    </Div>


  );
}

const Div = styled.div`
background: ${(props) => props.MainColor};
`

export default App;


