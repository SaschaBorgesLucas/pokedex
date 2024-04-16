import styled from "styled-components";
import { AddPokemons } from '../AddPokemons';
import { ResetButton } from "../ResetButton";
import { ThemeToggler } from "../ThemeToggler";
import { ThemeContext } from '../../Providers';
import React, { useContext } from 'react';

const ListControls = ({maxPokemonCount, currentPokemonCont, add5ItensToList, reset}) =>{
  const { theme } = useContext(ThemeContext);
      return(
       <>
            <Toggler><ThemeToggler/></Toggler>
            
            <AddPokemons onClick={ add5ItensToList }/>
            <Div MainColor={theme.MainColor} MidColor={theme.MidColor} BotColor={theme.BotColor}>
                { maxPokemonCount } / { currentPokemonCont }
            </Div>
            <ResetButton onClick={reset}/>

        </>
  
    );
}

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

export { ListControls }