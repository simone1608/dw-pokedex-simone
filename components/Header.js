export default function Header() {

    let headerElement = document.createElement("header");
    headerElement.classList.add("header");

    headerElement.innerHTML = `
        <section class="pokedex">
            <img src="img/pokeball.svg" alt="Pokeball" class="pokedex-img">
            <h1 class="pokedex-header">Pokédex</h1>
        </section>
        <section class="search">
            <form action="">
                <input type="text" placeholder="Search">
            </form>
            <img src="img/hastag-button.svg" alt="Name" class="sort-img">
        </section>
        
    `

    return headerElement;
}