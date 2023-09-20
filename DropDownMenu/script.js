let menu = document.querySelector('.menu');

let button = document.querySelector('.button');

let dropdown = document.querySelector('.dropdown');

button.addEventListener('click', () => {
    if(dropdown.style['height'] == '0px') {
        dropdown.style.setProperty('height', '200px');
        dropdown.style.setProperty('opacity', '1');
    } else {
        dropdown.style.setProperty('height', '0px');
        dropdown.style.setProperty('opacity', '0');
    }
});