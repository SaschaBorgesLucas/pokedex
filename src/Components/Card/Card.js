import React, { useEffect, useState, useContext } from "react";
import {getPokemon} from "../Pokemon";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { ThemeContext }from '../ThemeToggler/ThemeTogglerProvider';

const Card = (props) => {
  const [pokemon, setPokemon] = useState(null);
  const { theme } = useContext(ThemeContext);

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
        <Div MainColor={theme.MainColor} MidColor={theme.MidColor} BotColor={theme.BotColor}>
          <Link to= {`pokemon/${pokemon.id}`}>
              <Li BotColor={theme.BotColor}>
                <p>{pokemon.name}</p>
                <p>
                  <h1><img src={pokemon.sprite} alt="sprite"/></h1>
                </p>
              </Li>
            </Link>
          </Div>
        </>
      )}
    </>
  );
}

const Li = styled.li`
  text-align: center;
  font-family: "Madimi One", sans-serif;
  font-weight: 400;
  font-style: normal;
  color: ${(props) => props.BotColor};
`
const Div = styled.div`
  margin:15px;
  text-align: justify;
  padding-top: 23px;
  height:142px;
  width: 142px;
  border-radius: 50%;
  background: ${(props) => props.MainColor};
  box-shadow: inset 7px 7px 35px ${(props) => props.MidColor},
              inset -7px -7px 35px ${(props) => props.BotColorColor};
  &:hover{
    box-shadow: inset 7px 7px 35px #036EE1,
    inset -7px -7px 35px ${(props) => props.MainColor};
  }
`
export default Card;