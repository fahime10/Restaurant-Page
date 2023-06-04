export function homeContent() {
    const content = document.querySelector('#content');
    content.innerHTML = "";
    const title = document.createElement('h1');
    const tile1 = document.createElement('div');
    const tile2 = document.createElement('div');
    const tile3 = document.createElement('div');

    title.innerHTML = "The Coffee House Restaurant";
    title.classList.add('title');

    tile1.innerHTML = 
    "The Coffee House Restaurant has been on the business for 3 centuries. " +
    "It started off as a small family business, then the business started to make " +
    "a lot of profit because of the high quality ingredients and flavourable taste. " +
    "People from other towns heard of this business and they went out of their way to give it a try.";
    tile1.classList.add('tile1');

    tile2.innerHTML = "Hours: <br>" + 
    "Sunday: 8am - 8pm <br>" +
    "Monday: 6am - 6pm <br>" +    
    "Tuesday: 6am - 6pm <br>" +
    "Wednesday: 6am - 6pm <br>" +
    "Thursday: 6am - 10pm <br>" +
    "Friday: 6am - 10pm <br>" +
    "Saturday: 8am - 10pm";
    tile2.classList.add('tile2');

    tile3.innerHTML = "Location: <br>" +
    "123 Coffee Drive, Coffeeville, Maine";
    tile3.classList.add('tile3');

    content.appendChild(title);
    content.appendChild(tile1);
    content.appendChild(tile2);
    content.appendChild(tile3);

    return content;
}