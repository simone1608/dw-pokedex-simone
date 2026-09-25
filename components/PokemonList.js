export default function PokemonList(pokemon) {

    let pokemonListElement = document.createElement("section");
    pokemonListElement.classList.add("pokemon-list");

    pokemon.forEach(function (pokemon) {

        const pokeUrl = pokemon.url.split("/");
        const id = pokeUrl[6];


        pokemonListElement.innerHTML += `
                    <div class="pokemon">
                        <a href="detail.html?name=${pokemon.name}">
                            <img loading="lazy" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png" 
                            alt="${pokemon.name}" class="pokemon-image">
                              <p class="pokemon-number">#${id.padStart(3, "0")}</p>
                            <p class="pokemon-name">${pokemon.name}</p>
                        </a>
                    </div>
                `
    });

    return pokemonListElement;
}