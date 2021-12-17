<script>
    import {pokemons} from '../stores/pokeStore';
    import PokeCard from '../components/pokeCard.svelte';
    let search="";
    let filterPokemon =[];
    $:{
        if(search.length>0){
            filterPokemon = $pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(search.toLowerCase()));
        }
        else{
            filterPokemon = [...$pokemons];
        }
    }
</script>

<svelte:head>
	<title>Pokedex</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">SvelteKit Pokedex</h1>
<input class="w-full rounded-md text-lg p-4 border-2 border-gray-200" bind:value={search} placeholder="Search Pokemon">
<div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
    {#each filterPokemon as pokeman}
            <PokeCard pokeman={pokeman}/>
    {/each}
</div>
    