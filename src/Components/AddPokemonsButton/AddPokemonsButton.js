import styled from 'styled-components';

export const AddPokemonsButton = ({label, onClick}) =>{
    return(
        <Div onClick={onClick}>{label}</Div>
    );
}


const Div = styled.div`
  height:36px;
  width:150px;
  margin: 10px;
  padding: 10px, 10px;
  background-color: grey;
  list-style-type: none;
  margin-bottom:20px;
  border-radius:10px;
`

export default AddPokemonsButton;