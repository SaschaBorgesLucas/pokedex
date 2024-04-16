import styled from 'styled-components';
import React, { useContext } from 'react';
import { ThemeContext } from '../../Providers';


const Header = () =>{
    const { theme } = useContext( ThemeContext );
    const Logo = 'https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo-8.png';

    return(
        <PokemonHeader>
            <Side SideBackground={ theme.MainColor }></Side> 
           
            <Middle MiddleBackground={ theme.MainColor }>
                <img src={ Logo } alt="Imagem do Header" width="300" height="100"></img>
            </Middle>
           
           <Side SideBackground={ theme.MainColor }></Side>
        </PokemonHeader>
    )
}

const PokemonHeader = styled.div`
    height: 120px;
    display: flex;
    justify-content: center;
`;
const Side = styled.div`
    width: 10%;
    height: 100%;
    background: ${(props) => props.SideBackground};
    justify-content: center;
`;
const Middle = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select:none;
    background: ${(props) => props.MiddleBackground};
`;

export { Header };