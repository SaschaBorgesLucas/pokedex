import styled from 'styled-components';
import { Button, ButtonContent } from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState, useContext } from "react";
import { getPokemonComplet } from '../Pokemon/PokemonAPI';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { ThemeContext } from '../../Providers';


const PokemonProfile = () =>{
    const { id } = useParams();
    const [pokemon, setPokemon] = useState({});
    const { theme } = useContext(ThemeContext);
    

    const Div = styled.div`
      width: 70%;
      padding: 5%;
      justify-content: center;
      align-items: center;
      border-radius: 18px;
      background-color: ${theme.MainColor};
      box-shadow: inset -8px -8px 12px ${theme.MidColor},
                  inset 8px 8px 12px ${theme.MainColor};
      li{
        color:${theme.BotColor};
        font-size:1.3rem;
        margin: 7px 0px 7px 0px;
        text-align: justify;
      }
      .abilities{
        list-style-type: circle;
        margin: 15px 0px 15px 20px;
      }
      hr{
        margin:12px 0px 12px 0px;
      }
      .PokemonData{
        font-size:1.0rem;
      }
      h1{
        font-size:2.8rem;
        color:${theme.BotColor}; 
      }
      h2{
        font-size:2.2rem;
        color:${theme.BotColor}; 
      }
    `;

    const Sides = styled.div`
        width: 10%;;
        background: ${theme.MainColor};
    `;
    const Main = styled.div`
        background: ${theme.MainColor};
        display: flex;
    `;
    

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

    return (
      <>
        <Main>
          <Sides />
          <Div>
                {pokemon && (
                  <>
                  <h1>{pokemon.name}</h1>
                  <li>
                    <p className='PokemonData'>
                      <strong>ID: </strong>{pokemon.id}; 
                      <strong> Name:</strong> {pokemon.name};
                      <strong> types: </strong> {pokemon.types} 
                    </p>
                    <p><img src={pokemon.sprite} alt="sprite"/> </p>
              
                    <h2><strong> Abilities </strong></h2>
                    <ul>
                      {pokemon.abilities && pokemon.abilities.map((ability, index) => (
                      <li className='abilities' key={index}>
                        <strong>Name:</strong> {ability.name}<br />
                        <strong>Description:</strong> {ability.description}
                      </li> ))}
                    </ul>
                    <hr/>
                    <p><strong> Moves: </strong> {pokemon.moves} </p>
                  </li>
                  </>
                )}
          </Div>
          <Sides> 
            <Link to='/'>
              <Button  top={'50%'} margin={"30px"}>
                            <ButtonContent><FontAwesomeIcon icon={faArrowLeft} /> </ButtonContent>
              </Button>
            </Link>
          </Sides>
        </Main>
      </>
    );

}


export { PokemonProfile }