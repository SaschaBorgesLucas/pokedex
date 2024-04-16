import { Button, ButtonContent } from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const AddPokemons = ({onClick}) =>{
  
  return(
      <>
        <Button onClick = { onClick } top={'220px'} margin={'25px'}>
          <ButtonContent><FontAwesomeIcon icon={faPlus}/>5</ButtonContent>
        </Button>
      </>
    );
}


export  { AddPokemons };