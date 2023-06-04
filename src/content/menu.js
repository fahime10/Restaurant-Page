export function menuContent() {
    const content = document.querySelector('#content');
    content.innerHTML = "";
    const title = document.createElement('h1');
    const tile1 = document.createElement('div');
    const tile2 = document.createElement('div');
    const tile3 = document.createElement('div');

    title.innerHTML = "Menu";
    title.classList.add('title');

    tile1.innerHTML = 
    "<b>Latte</b> <br> " +
    "Coffee with steamed milk <br>" +
    "£1.20";
    tile1.classList.add('tile1');

    tile2.innerHTML = 
    "<b>Macchiato</b> <br> " +
    "Espresson with small amount of milk and foamed. <br>" +
    "£1.40"
    tile2.classList.add('tile2');

    tile3.innerHTML = 
    "<b>Espresso</b> <br> " +
    "The classic <br>" +
    "£1.00"
    tile3.classList.add('tile3');

    content.appendChild(title);
    content.appendChild(tile1);
    content.appendChild(tile2);
    content.appendChild(tile3);

    return content;
}