let root = document.querySelector(':root');

let title = document.querySelector('.title');

let leftButton = document.querySelector('.left');
leftButton.addEventListener('click', left);

let rightButton = document.querySelector('.right');
rightButton.addEventListener('click', right);

let navButtons = [];

for (let i = 0; i <= 4; i++) {
    navButtons[i] = document.querySelector("#button" + i);
    navButtons[i].addEventListener('click', () => { 
        navPressed(i);
    });
}

updateTitle();
updateNav();


function left() {
    let index = getComputedStyle(root).getPropertyValue('--index');

    if(index == 0) {
        newIndex = 4;
    } else {
        newIndex = Number(index) - 1;
    }

    root.style.setProperty('--index', newIndex);

    updateTitle();
    updateNav();
}

function right() {
    let index = getComputedStyle(root).getPropertyValue('--index');

    let newIndex;

    if(index == 4) {
        newIndex = 0;
    } else {
        newIndex = Number(index) + 1;
    }

    root.style.setProperty('--index', newIndex);

    updateTitle();
    updateNav();
}

function navPressed(index) {
    root.style.setProperty('--index', index);

    updateTitle();
    updateNav();
}

function updateTitle() {
    let index = getComputedStyle(root).getPropertyValue('--index');

    if (index == 0) {
        title.innerHTML = "Toucan";
    } else if (index == 1) {
        title.innerHTML = "Rainbow<br>Lorikeet";
    } else if (index == 2) {
        title.innerHTML = "Green Parakeet";
    } else if (index == 3) {
        title.innerHTML = "Panamanian<br>Golden Frog";
    } else {
        title.innerHTML = "Atlantic Puffins";
    }
}

function updateNav() {
    let index = getComputedStyle(root).getPropertyValue('--index');

    for (let i = 0; i < 5; i++) {
        if (i == index) {
            navButtons[i].style.setProperty('background-color', 'hsl(205, 100%, 27%)');
        } else {
            navButtons[i].style.setProperty('background-color', '#292929');
        }
    }
}