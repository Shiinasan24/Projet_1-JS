

// VARIABLES //


let menuBurger = document.querySelector(".burger");
let navMobile = document.querySelector(".navMobile");

menuBurger.addEventListener("click", displayNav);


// FUNCTIONS //


// navMobile DISPLAY ON BURGER CLICK --
function displayNav() {
    navMobile.classList.toggle("toggleDisplay");
}

console.log(hideOnScroll);