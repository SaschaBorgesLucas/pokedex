import React, {useContext} from "react";
import { ThemeContext, Themes } from "./ThemeTogglerProvider";
import Button from '../Button'

export const ThemeTogglerButton = () =>{
    const {theme, setTheme} = useContext(ThemeContext);
    
   
    return(
        <div>
            <Button onClick={()=>setTheme(theme === Themes.light ? Themes.dark : Themes.light)}>
                Clique
            </Button>
        </div>
    );
}

export default ThemeTogglerButton;