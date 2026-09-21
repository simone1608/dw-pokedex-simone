import PokemonList from "../components/PokemonList.js";

let rootElement = document.querySelector("#root");

function render() {
    rootElement.innerHTML = "";

    let mainElement = document.createElement("main");

    mainElement.append(PokemonList());

    rootElement.append(mainElement);
}

function init() {
    render();
}

init()