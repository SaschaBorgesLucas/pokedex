import React, {useContext} from 'react';
import { ThemeContext } from '../ThemeToggler/ThemeTogglerProvider';

const Button = (props) =>{
    const {theme} = useContext(ThemeContext);
 
    return(
        <>
            <button {...props} style={{ color: theme.color, backgroundColor: theme.backgrond }}/>
        </>
    );
}
export default Button;