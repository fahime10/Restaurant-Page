export function contactContent() {
    const content = document.querySelector('#content');
    content.innerHTML = "";
    const title = document.createElement('h1');
    const tile1 = document.createElement('div');
    const tile2 = document.createElement('div');
    const tile3 = document.createElement('div');

    title.innerHTML = "Contact Us";
    title.classList.add('title');

    tile1.innerHTML = 
    "<b>Owner</b> <br> " +
    "James Smith <br>" +
    "0116 1234567 <br>" +
    "TemplateEmail@gmail.com";
    tile1.classList.add('tile1');

    tile2.innerHTML = 
    "<b>Chef</b> <br> " +
    "James Smith <br>" +
    "0116 1234567 <br>" +
    "TemplateEmail@gmail.com";
    tile1.classList.add('tile2');

    tile3.innerHTML = 
    "<b>Cashier</b> <br> " +
    "James Bond <br>" +
    "0116 1234567 <br>" +
    "TemplateEmail@gmail.com";
    tile1.classList.add('tile3');

    content.appendChild(title);
    content.appendChild(tile1);
    content.appendChild(tile2);
    content.appendChild(tile3);

    return content;
}