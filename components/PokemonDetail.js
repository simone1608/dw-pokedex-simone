export default function PokemonDetail(pokemon) {

    let pokemonDetailElement = document.createElement("section");
    pokemonDetailElement.classList.add("pokemon-detail");

    pokemonDetailElement.innerHTML = `
        <h1 class="pokemon-name">${pokemon.name}</h1>
    `;

    return pokemonDetailElement;
}