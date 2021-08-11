const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu-div');
const nav = document.querySelector('.nav-style');

let menuOpen = false ;

menuBtn.addEventListener('click', () => {
    if(!menuOpen){
        menuBtn.classList.add('open');
        menu.classList.add('open-menu');
        nav.classList.add('bg-black');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menu.classList.remove('open-menu');
        nav.classList.remove('bg-black');
        menuOpen = false;
    }
});