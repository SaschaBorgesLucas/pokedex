import getPokemon from './Components/Card/PokemonAPI';
import PokemonListItem from './Components/Card/PokemonListItem';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({
      id: 30,
      name: 'nidorina',
      sprites: {
        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png'
      }
    }),
  })
);

describe ('getPokemon()', () =>{
  
  test('1 - getPokemon() retorna um objeto da classe PokemonListItem', async () =>{
    const pokemon = await getPokemon(30);
    expect(pokemon).toBeInstanceOf(PokemonListItem);
  });

  test('2- getPokemon() retorna o pokemon nidorina de id:30',  async () =>{
    const pokemon = await getPokemon(30);
    expect(pokemon.id).toBe(30);
    expect(pokemon.name).toBe('nidorina');
    expect(pokemon.sprite).toBe('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png');
  });
});

  
