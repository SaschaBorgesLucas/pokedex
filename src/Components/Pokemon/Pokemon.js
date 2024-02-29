import React, { useEffect, useState } from "react";
import { getPokemonComplet } from "../Pokemon";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Pokemon = () =>{
    const { id } = useParams();
    const [pokemon, setPokemon] = useState({});
    
    useEffect(() => {
      const fetchData = async () => {
        try {
          const monster = await getPokemonComplet(id);
          setPokemon(monster);
          
        } 
        catch (error){
          console.error('Erro ao obter dados do Pokémon');
        }
      };
      fetchData();
    }, [id]);
    
    console.log(pokemon)
  
    return (
      <>
         {pokemon && (
          <>
          <h1>{pokemon.name}</h1>
          <li>
            <p>ID: {pokemon.id}</p>
            <p>Name: {pokemon.name}</p>
            <p><img src={pokemon.sprite} alt="sprite"/> </p>
            <p><strong> types: </strong> {pokemon.types} </p>
            <p><strong> Abilities: </strong></p>
            <ul>
              {pokemon.abilities && pokemon.abilities.map((ability, index) => (
              <li key={index}>
                <strong>Name:</strong> {ability.name}<br />
                <strong>Description:</strong> {ability.description}
             </li> ))}
            </ul>
            <p><strong> Moves: </strong> {pokemon.moves} </p>
            <Link to='/'> voltar </Link>
          </li>
          </>
        )}
      </>
    );

}

export {Pokemon}
