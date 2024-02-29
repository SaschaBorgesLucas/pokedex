class SimplePokemon {
    
    constructor() {
      this.id ='';
      this.name ='';
      this.sprite ='';
    }

    setInfo(pokemon) {
      this.id = pokemon.id;
      this.name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);;
      this.sprite = pokemon.sprites.front_default;
    }

  }
  
  export default SimplePokemon;