import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faRotateLeft} from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from '../../Components/ThemeToggler/ThemeTogglerProvider';
import React, { useContext } from 'react';

export const ResetButton = ({onClick}) =>{
  const { theme } = useContext(ThemeContext);
    return(
      <>
        <Div onClick={onClick} MainColor={theme.MainColor} MidColor={theme.MidColor} BotColor={theme.BotColor}>
        <FontAwesomeIcon icon={faRotateLeft} />
        </Div>
        </>
    );
}


const Div = styled.div`
color: ${(props) => props.BotColor};
position: fixed;
top:565px;
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
z-index:2;
`

export default ResetButton;