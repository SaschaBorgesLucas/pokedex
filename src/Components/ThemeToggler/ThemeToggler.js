import React, {useContext} from "react";
import { ThemeContext, Themes } from '../../Providers';
import { Button, ButtonContent } from "../Button";

const ThemeToggler = () =>{
    const {theme, setTheme} = useContext(ThemeContext);
    
   
    return(
        <Button onClick={()=>setTheme(theme === Themes.light ? Themes.dark : Themes.light)} top={'120px'} margin={'25px'}>
            <ButtonContent><p>{theme.icon}</p> </ ButtonContent> 
        </Button>

    );
}


export { ThemeToggler };