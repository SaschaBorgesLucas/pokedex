import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import { PokemonProfile } from "../Components/PokemonProfile";
const  PokemonRouters = () =>{
    return(

        <BrowserRouter>
            <Routes>
                <Route exact path ='/' element={<Home />}/>
                <Route exact path ='/pokemon/:id' element={<PokemonProfile />}/>
            </Routes>
        </BrowserRouter>

    );
}


export default PokemonRouters;

