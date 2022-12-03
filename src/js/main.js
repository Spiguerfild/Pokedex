import '../css/style.css'


const input_pesquisa = document.querySelector('#input_pesquisa');
const btn_localizar = document.querySelector('#btn_localizar');
const display_pokedex = document.querySelector('#display');


btn_localizar.addEventListener('click', async () => {

    const pokemon_dados = await localizar_pokemon(input_pesquisa.value);

    create_card(pokemon_dados);
})

async function localizar_pokemon(pokemon_id) {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon_id}`
    const response = await fetch(url);
    const pokemon = await response.json()
    console.log(pokemon);
    return pokemon;
}

function create_card(pokemon) {
    const card_pokemon = document.createElement('div')
    card_pokemon.className = 'cartao_pokemon';
    card_pokemon.innerHTML = `
    <img class="pokemon_sprite" src="${pokemon.sprites.front_default}" >
    <h2>${pokemon.name}</h2>
 `
 display_pokedex.appendChild(card_pokemon);
}