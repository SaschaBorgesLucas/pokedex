import React, { useEffect, useState } from "react";
import {getPokemon} from "../Pokemon";

const Card = (props) => {
  const [pokemon, setPokemon] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const monster = await getPokemon(props.id);
        setPokemon(monster);
        
      } 
      catch (error){
        console.error('Erro ao obter dados do Pokémon');
      }
    };
    fetchData();
  }, [props.id]);

  return (
    <>
       {pokemon && (
        <div>
          <p>ID: {pokemon.id}</p>
          <p>Name: {pokemon.name}</p>
          <p><img src={pokemon.sprite} alt="sprite"/></p>
          <p></p>
        </div>
      )}
    </>
  );
}

export default Card;