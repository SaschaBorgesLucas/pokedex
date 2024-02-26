import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import { Pokemon } from "../Components/Pokemon";

const  PokemonRouters = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path ='/' element={<Home />}/>
                <Route exact path ='/pokemon/:id' element={<Pokemon />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default PokemonRouters;

