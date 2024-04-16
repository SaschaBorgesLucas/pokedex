import styled from 'styled-components';
import React, { useContext } from 'react';
import { ThemeContext } from '../../Providers';

const Footer = () =>{
    const { theme } = useContext(ThemeContext);
    return(
        <PokemonFooter MainColor={theme.MainColor}>
              <P>saschaborgeslucas@gmail.com</P>  
        </PokemonFooter>
    )
}

const PokemonFooter = styled.div`
    height:20vh;
    background: ${(props) => props.MainColor};
`
const P = styled.p`
    font-size: 15px;
    bottom: 0;
    position: fixed;
    width: 90%;
    text-align: center;
`

export { Footer }