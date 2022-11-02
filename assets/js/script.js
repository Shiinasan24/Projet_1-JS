
// ------------- VARIABLES ------------- //

// Menu Burger ---

const menuBurger = document.querySelector(".burger");
const navMobile = document.querySelector(".navMobile");
menuBurger.addEventListener("click", displayNav);

// Age Prompt --- 

const bodyDisplay = document.querySelector("body")
const bodyHide = document.querySelector(".hide")

// ------------- FUNCTIONS ------------- //

// navMobile DISPLAY ON BURGER CLICK ---
function displayNav() {
    navMobile.classList.toggle("toggleDisplay");
}

// agePrompt when entering website ---
function agePrompt() {

    const age = prompt("Quel est votre age ?");

    if (age < 18) {
        alert(age + " ans ? Y'a rien à voir ici pour toi, kiddo.");
    } else {
        alert(age + " ans ? Enjoy.");
        bodyDisplay.classList.remove("hide")
    }
}


// ------------- FUNCTION CALLS ------------- //

// Asking for age when entering website ---
agePrompt()