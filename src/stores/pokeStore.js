import { writable } from "svelte/store";

export let pokemons = writable([]);

const fetchPokemons = async (limit) =>{
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}`);
    const data = await response.json();
    const datos= data.results.map(pokemon => ({
        id: pokemon.url.split('/').reverse()[1],
        name: pokemon.name,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/').reverse()[1]}.png`
    }));
    pokemons.set(datos);
}

fetchPokemons(800);