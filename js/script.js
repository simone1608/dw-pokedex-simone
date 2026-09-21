import PokemonList from "../components/PokemonList.js";
import Header from "../components/Header.js";

let rootElement = document.querySelector("#root");

function render() {
    rootElement.innerHTML = "";
    rootElement.append(Header());

    let mainElement = document.createElement("main");

    mainElement.append(PokemonList());

    rootElement.append(mainElement);
}

function init() {
    render();
}

init()