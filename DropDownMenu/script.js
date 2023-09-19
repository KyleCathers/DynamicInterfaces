let menu = document.querySelector('.menu');

let button = document.querySelector('.button');
button.addEventListener('click', () => {
    console.log(`visibility is ${menu.style.visibility}`);
    if(menu.style.visibility === 'visible') {
        menu.style.visibility = 'hidden';
        console.log('test1');
    } else {
        menu.style.visibility = 'visible';
        console.log('test2');
    }
});