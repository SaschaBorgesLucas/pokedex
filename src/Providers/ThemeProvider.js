import { createContext, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';

const Themes ={
    dark:{
        MainColor:'#07203B',
        MidColor:'#c9c9c9',
        BotColor: '#ffffff',
        HoverColor:'#036EE1',
        icon: <FontAwesomeIcon icon={faMoon} />
    },

    light:{
        MainColor:'#ffffff',
        MidColor:'#c9c9c9',
        BotColor: '#07203B',
        HoverColor:'#036EE1',
        icon:<FontAwesomeIcon icon={faSun} />
    }
    
}

const ThemeContext = createContext({});

const ThemeProvider = (props) => {
    const [theme, setTheme] = useState(Themes.light)
    return(
            <ThemeContext.Provider value={{theme, setTheme}}>
                {props.children} 
            </ThemeContext.Provider>
    )
}

export {ThemeProvider, ThemeContext, Themes}

