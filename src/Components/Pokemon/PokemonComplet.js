import SimplePokemon from "./SimplePokemon";

class PokemonComplet extends SimplePokemon{
    constructor(){
        super();
        this.types = [];
        this.abilities = [];
        this.moves = [];
    }
    
    setInfo(pokemon){
        super.setInfo(pokemon);
        this.setTypes(pokemon.types);
        this.setAbilities(pokemon.abilities);
        this.setMoves(pokemon.moves);
    }
      
    setTypes(types){
      this.types = types.map(element => element.type.name).map(word =>
      word.charAt(0).toUpperCase()+word.slice(1)+(" "));
    }

    setAbilities(abilities) {
      this.abilities = abilities.map(element => ({
        name: element.name,
        description: element.description
      }));
  
    }
      
    setMoves(moves){
      this.moves = (moves.map(element => element.move.name).map((nome, index) => {
        if (index === moves.length - 1) {
           return nome.charAt(0).toUpperCase() + nome.slice(1) + ".";
        } else {
          return nome.charAt(0).toUpperCase() + nome.slice(1) + ", ";
        }}).join(""));
      }

}

export { PokemonComplet }