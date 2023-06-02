import './style.css';
import Background from './coffee-background.jpg';
import Main from './main-image.jpg';

console.log("Check console");

const headerNavMenu = () => {
    const header = document.createElement('header');
    const home = document.createElement('button');
    const menu = document.createElement('button');
    const contact = document.createElement('button');

    home.innerHTML = "Home";
    menu.innerHTML = "Menu";
    contact.innerHTML = "Contact";

    header.appendChild(home);
    header.appendChild(menu);
    header.appendChild(contact);

    return header;
};

function content() {
    const content = document.querySelector('#content');
    const title = document.createElement('h1');

    title.innerHTML = "The Coffe House Restaurant";
    title.classList.add('title');

    content.appendChild(title);

    const background = new Image();
    background.src = Background;
    background.classList.add('coffee-background');

    const main = new Image();
    main.src = Main;
    main.classList.add('main-image');

    content.appendChild(background);
    content.appendChild(main);

    return content;
}

document.body.appendChild(headerNavMenu());
document.body.appendChild(content());