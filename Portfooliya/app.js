const openHamburger = document.querySelector('.hamburger__menu');
const closeHamburger = document.querySelector('.hamburger__close');
const hamburgerMenu = document.querySelector('.hamburger__collection');



openHamburger.addEventListener('click', openHamburgerMenu);
closeHamburger.addEventListener('click', closeHamburgerMenu);
function openHamburgerMenu(e){
    hamburgerMenu.classList.add('activeHamburger');
    openHamburger.style.display = "none";
    closeHamburger.style.display = "flex";
}

function closeHamburgerMenu(e){
    hamburgerMenu.classList.remove('activeHamburger');
    closeHamburger.style.display = "none";
    openHamburger.style.display = "flex";
}
// const openHamburger = document.querySelector(".hamburger__menu")
// const closeHamburger = document.querySelector('.hamburger__close')
// const hamburgerMenu = document.querySelector('.hamburger__collection')

// openHamburger.addEventListener('click', openDive);

// closeHamburger.addEventListener('.click', removeDive)
// function openDive(e){
//     hamburgerMenu.classList.add('activeHambur')
//     openHamburger.style.display = "none";
//     closeHamburger.style.display = "flex";
// }

// function removeDive(e){
//     hamburgerMenu.classList.remove('activeHambur')
//     closeHamburger.style.display = "none";
//     openHamburger.style.display = "block"
// }