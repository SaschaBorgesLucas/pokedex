import styled from "styled-components";
import AddPokemonsButton from '../AddPokemonsButton/AddPokemonsButton';
import { ResetButton } from "../ResetButton";
import {ThemeTogglerButton} from "../ThemeToggler";
import { ThemeContext } from '../../Components/ThemeToggler/ThemeTogglerProvider';
import React, { useContext } from 'react';

const PokemonListControls = ({maxPokemonCount, currentPokemonCont, add5ItensToList, reset, isItVisible}) =>{
  const { theme } = useContext(ThemeContext);
      return(
       <>
            <Toggler><ThemeTogglerButton/></Toggler>
            
            <AddPokemonsButton onClick={ add5ItensToList }/>
            <Div MainColor={theme.MainColor} MidColor={theme.MidColor} BotColor={theme.BotColor}>
                { maxPokemonCount } / { currentPokemonCont }
            </Div>
            <ResetButton onClick={reset}/>

        </>
  
    );
}

export {PokemonListControls}

const Div = styled.div`
  color: ${(props) => props.BotColor};
  width:58px;
  height:400px;
  text-align: center;
  font-size:2.5rem;
  position: fixed;
  top:220px;
  z-index:1;
  margin: 22px;
  writing-mode: vertical-rl;
  transform: rotate(00deg);
  border-radius: 131px;
  background: ${(props) => props.MainColor};
  box-shadow: inset -16px 16px 32px ${(props) => props.MidColor},
              inset 16px -16px 32px ${(props) => props.MainColor};

`
const Toggler = styled.div`
  width:50px;
  height:20px;
`

export default PokemonListControls;