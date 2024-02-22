import { createContext, useState } from "react";

export const Themes ={
    light:{
        color:'#000000',
        backgrond:'#eeeeee'
    },
    dark:{
        color:'#ffffff',
        backgrond:'#000000'
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

