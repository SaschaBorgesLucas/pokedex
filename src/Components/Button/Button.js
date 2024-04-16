import React, {useContext} from 'react';
import { ThemeContext } from '../../Providers';
import styled from 'styled-components';

const Button = (props) =>{
    const {theme} = useContext(ThemeContext); 
    
    const handleHover = (event) => {
        event.target.style.boxShadow = `-9px 9px 17px ${theme.HoverColor}, 9px -9px 17px ${theme.HoverColor}`;
      };
      
    const handleMouseOut = (event) => {
        event.target.style.boxShadow = `-9px 9px 17px ${theme.MidColor}, 9px -9px 17px ${theme.MainColor}`;
      };

    return(
        <>
            <button {...props} 
                onMouseOver={ handleHover }
                onMouseOut= { handleMouseOut }
                style={
                        {color: theme.BotColor, 
                        backgroundColor: theme.MainColor,
                        top:props.top,
                        margin:props.margin,
                        position: 'fixed',
                        display: 'flex',
                        height: '50px', 
                        width: '50px',   
                        border: 'none', 
                        cursor: 'pointer', 
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: '100%',
                        userSelect:'none',
                        boxShadow: `-9px 9px 17px ${theme.MidColor}, 9px -9px 17px ${theme.MainColor}`,
                        zIndex:'2'
                        }}>
            </button>
        </>
    );
}

const ButtonContent = styled.strong`
    font-size: 1.2rem;
    pointer-events: none;
    z-index: 3;
`;



export { Button, ButtonContent };






