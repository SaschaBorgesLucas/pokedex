import React, { useEffect, useState } from "react";
import {getPokemon} from "../Pokemon";
import { Link } from "react-router-dom";
import styled from 'styled-components';

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
        <>
          <Link to= {`pokemon/${pokemon.id}`}>
            <Li>
              <p>ID: {pokemon.id}</p>
              <p>Name: {pokemon.name}</p>
              <p><img src={pokemon.sprite} alt="sprite"/></p>
              <p></p>
            </Li>
          </Link>
        </>
      )}
    </>
  );
}

const Li = styled.li`
  height:220px;
  width:150px;
  margin: 10px;
  padding: 10px;
  background-color: grey;
  list-style-type: none;
  margin-bottom:20px;
  border-radius:10px;
`
export default Card;