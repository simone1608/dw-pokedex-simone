export default function PokemonList() {

    let pokemonListElement = document.createElement("section");
    pokemonListElement.classList.add("pokemon-list");

    fetch("https://pokeapi.co/api/v2/pokemon?limit=60")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

            data.results.forEach(function (pokemon) {

                pokemonListElement.innerHTML += `
                    <a href="detail.html?name=${pokemon.name}">
                        <div class="pokemon-liste">
                            <p class="pokemons-name">${pokemon.name}</p>
                        </div>
                    </a>
                `
            });
        });

    return pokemonListElement;
}