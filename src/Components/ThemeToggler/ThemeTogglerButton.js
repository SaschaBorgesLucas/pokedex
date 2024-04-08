import React, {useContext} from "react";
import { ThemeContext, Themes } from "./ThemeTogglerProvider";

import styled from 'styled-components';

export const ThemeTogglerButton = () =>{
    const {theme, setTheme} = useContext(ThemeContext);
    
   
    return(
                <Div onClick={()=>setTheme(theme === Themes.light ? Themes.dark : Themes.light)} 
                     BotColor={theme.BotColor} MidColor={theme.MidColor} MainColor={theme.MainColor}>
                    <p>{theme.icon}</p>
                </Div>

    );
}


const Div = styled.div`
background-color:${(props) => props.MainColor};
position: fixed;
margin: 27px;
display: flex;
justify-content: center;
align-items: center;
height: 50px;
width: 50px;
border-radius: 100%;
border-radius: 92px;
color: ${(props) => props.BotColor};
font-size:40px;
box-shadow: -9px 9px 17px ${(props) => props.MidColor}, 9px -9px 17px ${(props) => props.MainColor};
z-index:2;
`


export default ThemeTogglerButton;