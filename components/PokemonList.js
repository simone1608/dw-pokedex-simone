export default function PokemonList() {

    let pokemonListElement = document.createElement("section");
    pokemonListElement.classList.add("pokemon-list");

    fetch("https://pokeapi.co/api/v2/pokemon?limit=60")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

            data.results.forEach(function (pokemon) {

                const pokeUrl = pokemon.url.split("/");
                const id = pokeUrl[6];


                pokemonListElement.innerHTML += `
                    <div class="pokemon">
                        <a href="detail.html?name=${pokemon.name}">
                            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png" 
                            alt="${pokemon.name}" class="pokemon-image">
                              <p class="pokemon-number">#${id.padStart(3, "0")}</p>
                            <p class="pokemon-name">${pokemon.name}</p>
                        </a>
                    </div>
                `
            });
        });

    return pokemonListElement;
}