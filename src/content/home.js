export function homeContent() {
    const content = document.querySelector('#content');
    content.innerHTML = "";
    const title = document.createElement('h1');
    const description = document.createElement('div');
    const hours = document.createElement('div');
    const location = document.createElement('div');

    title.innerHTML = "The Coffee House Restaurant";
    title.classList.add('title');

    description.innerHTML = 
    "The Coffee House Restaurant has been on the business for 3 centuries. " +
    "It started off as a small family business, then the business started to make " +
    "a lot of profit because of the high quality ingredients and flavourable taste. " +
    "People from other towns heard of this business and they went out of their way to give it a try.";
    description.classList.add('description');

    hours.innerHTML = "Hours: <br>" + 
    "Sunday: 8am - 8pm <br>" +
    "Monday: 6am - 6pm <br>" +    
    "Tuesday: 6am - 6pm <br>" +
    "Wednesday: 6am - 6pm <br>" +
    "Thursday: 6am - 10pm <br>" +
    "Friday: 6am - 10pm <br>" +
    "Saturday: 8am - 10pm";
    hours.classList.add('hours');

    location.innerHTML = "Location: <br>" +
    "123 Coffee Drive, Coffeeville, Maine";
    location.classList.add('location');

    content.appendChild(title);
    content.appendChild(description);
    content.appendChild(hours);
    content.appendChild(location);

    return content;
}