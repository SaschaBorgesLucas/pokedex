import styled from 'styled-components';
import React, { useContext } from 'react';
import { ThemeContext }from '../ThemeToggler/ThemeTogglerProvider';

const Footer = () =>{
    const { theme } = useContext(ThemeContext);
    return(
        <PokemonFooter MainColor={theme.MainColor}>

        </PokemonFooter>
    )
}

const PokemonFooter = styled.div`
    height:20vh;
    background: ${(props) => props.MainColor};
`

export { Footer }