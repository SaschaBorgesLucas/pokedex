import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from '../../Components/ThemeToggler/ThemeTogglerProvider';
import React, { useContext } from 'react';

const AddPokemonsButton = ({onClick}) =>{
  const { theme } = useContext(ThemeContext);
    return(
      <>
        <Div onClick={onClick} MainColor={theme.MainColor} MidColor={theme.MidColor} BotColor={theme.BotColor}>
            <FontAwesomeIcon icon={faPlus}/><strong>5</strong>
        </Div>
        </>
    );
}


const Div = styled.div`
color: ${(props) => props.BotColor};
position: fixed;
top:220px;
margin: 25px;
display: flex;
justify-content: center;
align-items: center;
height: 50px;
width: 50px;
background-color: grey;
list-style-type: none;
border-radius: 100%;
border-radius: 92px;
background: ${(props) => props.MainColor};
box-shadow: -9px 9px 17px ${(props) => props.MidColor}, 9px -9px 17px ${(props) => props.MainColor};
strong {
  font-size: 1.2rem;
}
z-index:2;
`

export default AddPokemonsButton ;