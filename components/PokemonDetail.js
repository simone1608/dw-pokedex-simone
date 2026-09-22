export default function PokemonDetail(pokemon) {

    let pokemonDetailElement = document.createElement("section");
    pokemonDetailElement.classList.add("pokemon-detail");

    pokemonDetailElement.innerHTML = `
        <div class="detail-header">
            <div class="detail-title">
                <a href="index.html" class="back-arrow">
                    <img src="img/back-arrow-left.svg" alt="Back">
                </a>
                <h1 class="detail-name">${pokemon.name}</h1>
            </div>
            <p class="detail-number">
            #${pokemon.id.toString().padStart(3, "0")}
            </p>
        </div>
        
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" 
        alt="${pokemon.name}" class="pokemon-detail-image">


        

        <div class="pokemon-info">
            <div class="pokemon-types"></div>

            <h2 class="about-title">About</h2>
        </div>

        <div class="about-info">
            <section class="about-item">
                <div class="pokemon-size">
                    <img src="img/weight.svg" alt="Weight">
                <p>${pokemon.weight / 10} kg</p>
                </div>
                <p class="about-label">Weight</p>
            </section>
            <section class="about-item">
                <div class="pokemon-size">
                    <img src="img/height.svg" alt="Height">
                <p>${pokemon.height / 10} m</p>
                </div>
                <p class="about-label">Height</p>
            </section>
            <section class="about-item">
                <div class="abilities"></div>
                <p class="about-label">Abilities</p>
            </section>

            <h2 class="stats-title">Base Stats</h2>

            <div class="base-stats"></div>
        </div>
    `;

    let typesElement = pokemonDetailElement.querySelector(".pokemon-types");
    let abilitiesElement = pokemonDetailElement.querySelector(".abilities");
    let statsElement = pokemonDetailElement.querySelector(".base-stats");

    pokemon.types.forEach(function (type) {
        typesElement.innerHTML += `
            <p class="pokemon-type ${type.type.name}">${type.type.name}</p>
        `
    });

    pokemon.abilities.forEach(function (ability) {

        abilitiesElement.innerHTML += `
            <p class="ability">${ability.ability.name}</p>
        `;

    });

    pokemon.stats.forEach(function (stat) {
        statsElement.innerHTML += `
            <div class="stat">
                <p class="stat-name">${stat.stat.name}</div>
                <p class="stat-number">${stat.base_stat}</p>
            </div>
        `;
    });

    return pokemonDetailElement;
}