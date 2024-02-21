class SimplePokemon {
    
    constructor() {
      this.id ='';
      this.name ='';
      this.sprite ='';
    }

    setInfo(pokemon) {
      this.id = pokemon.id;
      this.name = pokemon.name;
      this.sprite = pokemon.sprites.front_default;
    }

  }
  
  export default SimplePokemon;