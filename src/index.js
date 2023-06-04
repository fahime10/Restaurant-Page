import './style.css';
import { homeContent } from './content/home.js';
import { menuContent } from './content/menu.js';
import { contactContent } from './content/contact.js';

let current = "Home";

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

function createContent() {
    if (current === "Home") {
        return homeContent();
    } else if (current === "Menu") {
        return menuContent();
    } else {
        return contactContent();
    }
}

const footerContent = () => {
    const footer = document.createElement('footer');

    footer.innerHTML = "Developed by Fahim Ahmed";
    footer.classList.add('footer');

    return footer;
};

document.body.appendChild(headerNavMenu());
document.body.appendChild(createContent());
document.body.appendChild(footerContent());

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => button.addEventListener('click', () => {
    buttons.forEach((button) => {
        button.style.backgroundColor = "#e0b47d";
    });

    current = button.innerHTML;
    button.style.backgroundColor = "blue";
    createContent();
}));