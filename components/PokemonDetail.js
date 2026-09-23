export default function PokemonDetail(pokemon) {

    let pokemonDetailElement = document.createElement("section");
    pokemonDetailElement.classList.add("pokemon-detail");

    let mainType = pokemon.types[0].type.name;

    pokemonDetailElement.style.setProperty(
        "--pokemon-color",
        `var(--${mainType})`
    );

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
        
        <div class="pokemon-image-area">

            <img src="img/pokeball.svg" alt="Pokeball" class="pokeball-background">

            ${pokemon.id > 1 ? `
                <a href="detail.html?name=${pokemon.id - 1}" class="previous-pokemon">
                    <img src="img/arrow-left.svg" alt="Left arrow">
                </a>
            ` : ""}

            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png" 
            alt="${pokemon.name}" class="pokemon-detail-image">

            <a href="detail.html?name=${pokemon.id + 1}" class="next-pokemon">
                <img src="img/arrow-right.svg" alt="Right arrow">
            </a>
        </div>
        
        <div class="pokemon-info">
            <div class="pokemon-types"></div>
            
            <h2 class="about-title">About</h2>
        

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
            </div>

            <p class="pokemon-description"></p>

            <h2 class="stats-title">Base Stats</h2>

            <div class="base-stats"></div>
        </div>
    `;

    let typesElement = pokemonDetailElement.querySelector(".pokemon-types");
    let abilitiesElement = pokemonDetailElement.querySelector(".abilities");
    let statsElement = pokemonDetailElement.querySelector(".base-stats");
    let descriptionElement = pokemonDetailElement.querySelector(".pokemon-description");

    let statName = {
        hp: "HP",
        attack: "ATK",
        defense: "DEF",
        "special-attack": "SATK",
        "special-defense": "SDEF",
        speed: "SPD"
    }

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
                <p class="stat-name">${statName[stat.stat.name]}</p>
                <p class="stat-number">${stat.base_stat.toString().padStart(3, "0")}</p>
                <div class="stat-bar">
                    <div 
                        class="stat-bar-fill" 
                        style="width: ${stat.base_stat}%">
                    </div>
                </div>
            </div>
        `;
    });

    fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.name}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let englishText = data.flavor_text_entries.find(function (entry) {
                return entry.language.name === "en";
            });
            descriptionElement.textContent = englishText.flavor_text
                .replace(/\n/g, " ")
                .replace(/\f/g, " ");
        });

    return pokemonDetailElement;
}