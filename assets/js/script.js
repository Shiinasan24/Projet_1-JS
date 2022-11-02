
// ----------------------- VARIABLES ----------------------- //

// var - Menu Burger :

const menuBurger = document.querySelector(".burger");
const navMobile = document.querySelector(".navMobile");
menuBurger.addEventListener("click", displayNav);

// var - Country :

const age = document.querySelector("#ageInput")
const country = document.querySelector("#countrySelect");
const btnAgePrompt = document.querySelector("#btnAgePrompt");
btnAgePrompt.addEventListener("click", agePrompt);

// -- FR --
const whatAgeFr = "Quel est votre age ?";
const legalAgeFr = 18;
const isFrLegal = " ans ? C'est bon tu peux entrer.";
const isFrNotLegal = " ans ? T'es trop jeune pour entrer.";

// -- JP --
const whatAgeJp = "何歳ですか";
const legalAgeJp = 20;
const isJpLegal = "それは良いです.";
const isJpNotLegal = "若すぎる.";

// -- US --
const whatAgeUs = "How old are you ?";
const legalAgeUs = 21;
const isUsLegal = " years old ? You're good to go.";
const isUsNotLegal = " years old ? Turn around, you're too young.";


// ----------------------- FUNCTIONS ----------------------- //

// Fn - navMobile DISPLAY ON BURGER CLICK :
function displayNav() {
    navMobile.classList.toggle("toggleDisplay");
}

function agePrompt() {  


    if (country.value == "FR") {
        if (age.value < legalAgeFr) {
            alert(age.value + isFrNotLegal);
        } else {
            alert(age.value + isFrLegal)
        } 
    } else if (country.value == "JP") {
        if (age.value < legalAgeJp) {
            alert(age.value + isJpNotLegal)
        } else {
            alert(age.value + isJpLegal)
        } 
    } else if (country.value == "US") {
        if (age.value < legalAgeUs) {
            alert(age.value + isUsNotLegal)
        } else {
            alert(age.value + isUsLegal)
        } 
    } 
}   


// ----------------------- FUNCTION CALLS ----------------------- //

// Fc - Asking for age when entering website :
// agePrompt("JP")