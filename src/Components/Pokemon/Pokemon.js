import React, { useEffect, useState } from "react";
import {getPokemon} from "../Pokemon";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Pokemon = () =>{
    const { id } = useParams();
    const [pokemon, setPokemon] = useState({});
    
    useEffect(() => {
      const fetchData = async () => {
        try {
          const monster = await getPokemon(id);
          setPokemon(monster);
          
        } 
        catch (error){
          console.error('Erro ao obter dados do Pokémon');
        }
      };
      fetchData();
    }, [id]);

    
  
    return (
      <>
         {pokemon && (
          <>
          <h1>{pokemon.name}</h1>
          <li>
            <p>ID: {pokemon.id}</p>
            <p>Name: {pokemon.name}</p>
            <p><img src={pokemon.sprite} alt="sprite"/></p>
            <p></p>
            <Link to='/'> voltar </Link>
          </li>
          </>
        )}
      </>
    );

}

export {Pokemon}
