export default function PokemonDetail(pokemon) {

    let pokemonDetailElement = document.createElement("section");
    pokemonDetailElement.classList.add("pokemon-detail");

    pokemonDetailElement.innerHTML = `
        <h1 class="pokemon-name">${pokemon.name}</h1>
        <p class="pokemon-number">
            #${pokemon.id.toString().padStart(3, "0")}
        </p>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" 
        alt="${pokemon.name}" class="pokemon-detail-image">
    `;

    return pokemonDetailElement;
}