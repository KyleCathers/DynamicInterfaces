let menu = document.querySelector('.menu');

let button = document.querySelector('.menu-button');

let dropdown = document.querySelector('.dropdown');

let menuText = document.querySelectorAll('.menu-text');

let menuIcons = document.querySelectorAll('.icon');

button.addEventListener('click', () => {
    if(dropdown.style['height'] == '0px') {
        dropdown.style.setProperty('height', '50vh');
        dropdown.style.setProperty('opacity', '1');
        dropdown.style.setProperty('width', '100%');

        menuText.forEach(text => {
            text.style.setProperty('font-size', '2rem');
        });

        menuIcons.forEach(icon => {
            icon.style.setProperty('height', '60px');
        });
    } else {
        dropdown.style.setProperty('height', '0px');
        dropdown.style.setProperty('opacity', '0');
        dropdown.style.setProperty('width', '0%');

        menuText.forEach(text => {
            text.style.setProperty('font-size', '0rem');
        });

        menuIcons.forEach(icon => {
            icon.style.setProperty('height', '0px');
        });
    }
});