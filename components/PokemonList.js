export default function PokemonList() {

    let pokemonLitElement = document.createElement("section");
    pokemonLitElement.classList.add("pokemon-list");

    fetch("https://pokeapi.co/api/v2/pokemon?limit=60")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

            data.results.forEach(function (pokemon) {
                console.log(pokemon);
            });
        });

    return pokemonLitElement;
}