import PokemonDetail from "../components/PokemonDetail.js";

const params = new URLSearchParams(window.location.search);
const name = params.get("name");

console.log(name);

fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);

        render(data);

    });



let rootElement = document.querySelector("#root");

function render(pokemon) {
    rootElement.innerHTML = "";

    let mainElement = document.createElement("main");

    mainElement.append(PokemonDetail(pokemon));

    rootElement.append(mainElement);
}