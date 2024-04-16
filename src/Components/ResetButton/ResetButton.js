import { Button, ButtonContent} from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faRotateLeft} from '@fortawesome/free-solid-svg-icons';
import React from 'react';


const ResetButton = ({onClick}) =>{

  return(
      <>
        <Button onClick = { onClick } top={'565px'} margin={'25px'}>
          <ButtonContent> <FontAwesomeIcon icon={faRotateLeft} /> </ButtonContent>
        </Button>
      </>
  );
}



export { ResetButton } ;