import PokemonList from "../components/PokemonList.js";
import Header from "../components/Header.js";

let pokemon = [];
let customOffset = 0;

let observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {

            observer.unobserve(entry.target);

            customOffset = customOffset + 60;

            fetch(`https://pokeapi.co/api/v2/pokemon?offset=${customOffset}&limit=60`)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    pokemon = [...pokemon, ...data.results]
                    render()
                });

        }
    });
});

let rootElement = document.querySelector("#root");

function render() {
    rootElement.innerHTML = "";
    rootElement.append(Header());

    let mainElement = document.createElement("main");

    mainElement.append(PokemonList(pokemon));

    rootElement.append(mainElement);

    let fiftheLastElement = document.querySelector(".pokemon:nth-last-of-type(5)");
    observer.observe(fiftheLastElement);
}

function init() {
    fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=60")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            pokemon = [...data.results];

            render();
        });
}

init()