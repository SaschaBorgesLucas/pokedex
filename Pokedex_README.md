# Pokedex
    Este projeto cria um catálogo de criaturas da franquia pokémon.


Requisitos gerais
    - Utilizar React.js para o desenvolvimento da aplicação;
    - A aplicação deverá ser Single Page Application (SPA);
    - Utilizar Context API para criação do Theme Toggler (Alternador entre tema claro e escuro);
    - Utilizar styled-components para estilização doscomponentes;
    - Utilizar react-router-dom para a navegação entre aspáginas;
Home
    - A home deve apresentar uma listagem com 10 pokemonsiniciais.
    - A home deve ter um botão "Carregar mais" abaixo dessa lista,que quando clicado deve buscar mais 10 pokemons e adicionara listagem atual.
    - Essa listagem deve mostrar a imagem e nome de cada pokemon. Na listagem cada pokemon deve ser clicável e abrir uma nova página a página interna desse  pokemon.
Página interna
    - página interna desse pokemon deve ter
    - Imagem do pokemon
    - Nome
    - Lista de movimentos do pokemon (moves)
    - Lista de habilidades do pokemon (abilities)
        -a lista de habilidades deve apresentar o nome e o textodescritivo da habilidade
    - Tipo do pokemon (type)


    




Componentes
    Abaixo estão descritos os principais componentes da aplicação e suas funções:
    <b>Card:</b> Este componente representa uma criatura individual com suas informações mais básicas, que é representada no navegador como uma carta;
    <b>Deck:</b> Representa um conjunto de criaturas na forma de cartas.