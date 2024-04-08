import { createContext, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMoon} from '@fortawesome/free-solid-svg-icons';
import {faSun} from '@fortawesome/free-solid-svg-icons';

export const Themes ={
    dark:{
        MainColor:'#07203B',
        MidColor:'#c9c9c9',
        BotColor: '#ffffff',
        icon: <FontAwesomeIcon icon={faMoon} />
    },
    light:{
        MainColor:'#ffffff',
        MidColor:'#c9c9c9',
        BotColor: '#07203B',
        icon:<FontAwesomeIcon icon={faSun} />
    }
}

export const ThemeContext = createContext({});

export const ThemeTogglerProvider = (props) => {
    const [theme, setTheme] = useState(Themes.light)
    return(
            <ThemeContext.Provider value={{theme, setTheme}}>
                {props.children} 
            </ThemeContext.Provider>
    )
}

export default ThemeTogglerProvider

