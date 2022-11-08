// =========================================================
// =============           VARIABLES           =============
// =========================================================

// ===================
// var - Menu Burger :
// ===================

const menuBurger = document.querySelector(".burger");
const navMobile = document.querySelector(".navMobile");

// addEventListener - sur la div menu burger pour lancer la function displayNav et faire apparaitre le menu
menuBurger.addEventListener("click", displayNav);

// ===============
// var - Country :
// ===============

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

// ================
// var - MINI JEU :
// ================

// btn Start
const btnStartMiniJeu = document.getElementById("btnStartMiniJeu")

// btn Reset
const btnCloseMiniJeu = getElementById("btnCloseMiniJeu")

// display HTML Score
const displayNumberToBeFound = document.getElementById("numberToBeFound")

// AddEventListener - sur le bouton " #btnStartMiniJeu " et lance la function startMiniJeu
btnStartMiniJeu.addEventListener("click", startMiniJeu)

// addEventListener - sur le bouton " #btnCloseMiniJeu " et lance la function closeMiniJeu
btnCloseMiniJeu.addEventListener("click", closeMiniJeu)

// -- Chara 1 --
const chara1 = document.getElementById("chara1")
let drawChara1
const numberDrawnRed = document.getElementById("numberDrawnRed")
const displayScoreRed = document.getElementById("scoreRed")
let scoreRed = 0

// -- Chara 2 --
const chara2 = document.getElementById("chara2")
let drawChara2
const numberDrawnBlue = document.getElementById("numberDrawnBlue")
const displayScoreBlue = document.getElementById("scoreBlue")
let scoreBlue = 0


// =========================================================
// =============           FUNCTIONS           =============
// =========================================================

// fn - navMobile DISPLAY ON BURGER CLICK :
function displayNav() {
    navMobile.classList.toggle("toggleDisplay");
}

// fn - 
function agePrompt() {  

    if (country.value == "FR") {
        if (age.value < legalAgeFr) {
            alert(age.value + isFrNotLegal)
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

// ===============
// fn - MINI JEU :
// ===============

// fn - Lancement du mini jeu
function startMiniJeu() {

    toBeFound = drawNumbers(10)
    drawChara1 = drawNumbers(10)
    drawChara2 = drawNumbers(10)
    
    displayNumberToBeFound.innerHTML = toBeFound
    numberDrawnRed.innerHTML = "Nombre tiré : " + drawChara1
    numberDrawnBlue.innerHTML = "Nombre tiré : " + drawChara2
    
    if (drawChara1 === toBeFound) {
        scoreRed++
        displayScoreRed.innerHTML = scoreRed
        chara = 0;
        
    } else if (drawChara2 === toBeFound) {
        scoreBlue++
        displayScoreBlue.innerHTML = scoreBlue;
        chara = 1;  
    }
    charaWin()
}


// fn - Arret du mini jeu
function closeMiniJeu() {

}

// fn - Draw a random number
function drawNumbers(max) {
    return Math.floor(Math.random() * max);
}

// fn - Fonction qui defini le victorieux et lance la function charaWin qui lance l'animation perso du gagnant
function charaWin() {
    if (chara === 0) {
        animationRed()
    } else if (chara === 1) {
        animationBlue()
    }
}

// ----------------------------------------
function animationRed() {
    
    chara1.classList.toggle("chara1BaseRed")
    chara1.classList.toggle("chara1Win0Red")
    
    setTimeout(() => {
        chara1.classList.toggle("chara1Win0Red")
        chara1.classList.toggle("chara1Win1Red")
    }, "500");

    setTimeout(() => {
        chara1.classList.toggle("chara1Win1Red")
        chara1.classList.toggle("chara1Win0Red")
    }, "1000");

    setTimeout(() => {
        chara1.classList.toggle("chara1Win0Red")
        chara1.classList.toggle("chara1Win1Red")
    }, "1500");

    setTimeout(() => {
        chara1.classList.toggle("chara1Win1Red")
        chara1.classList.toggle("chara1Win0Red")
    }, "2000");

    setTimeout(() => {
        chara1.classList.toggle("chara1Win0Red")
        chara1.classList.toggle("chara1Win1Red")
    }, "2500");

    setTimeout(() => {
        chara1.classList.toggle("chara1Win1Red")
        chara1.classList.toggle("chara1Win0Red")
    }, "3000");

    setTimeout(() => {
        chara1.classList.toggle("chara1Win0Red")
        chara1.classList.toggle("chara1Win1Red")
    }, "3500");

    setTimeout(() => {
        chara1.classList.toggle("chara1Win1Red")
        chara1.classList.toggle("chara1Win0Red")
    }, "4000");

    setTimeout(() => {
        chara1.classList.toggle("chara1Win0Red")
        chara1.classList.toggle("chara1BaseRed")
    }, "4200");
}
    

// ----------------------------------------
function animationBlue() {

    chara2.classList.toggle("chara2BaseBlue")
    chara2.classList.toggle("chara2Win0Blue")
    
    setTimeout(() => {
        chara2.classList.toggle("chara2Win0Blue")
        chara2.classList.toggle("chara2Win1Blue")
    }, "500");

    setTimeout(() => {
        chara2.classList.toggle("chara2Win1Blue")
        chara2.classList.toggle("chara2Win0Blue")
    }, "1000");

    setTimeout(() => {
        chara2.classList.toggle("chara2Win0Blue")
        chara2.classList.toggle("chara2Win1Blue")
    }, "1500");

    setTimeout(() => {
        chara2.classList.toggle("chara2Win1Blue")
        chara2.classList.toggle("chara2Win0Blue")
    }, "2000");

    setTimeout(() => {
        chara2.classList.toggle("chara2Win0Blue")
        chara2.classList.toggle("chara2Win1Blue")
    }, "2500");

    setTimeout(() => {
        chara2.classList.toggle("chara2Win1Blue")
        chara2.classList.toggle("chara2Win0Blue")
    }, "3000");

    setTimeout(() => {
        chara2.classList.toggle("chara2Win0Blue")
        chara2.classList.toggle("chara2Win1Blue")
    }, "3500");

    setTimeout(() => {
        chara2.classList.toggle("chara2Win1Blue")
        chara2.classList.toggle("chara2Win0Blue")
    }, "4000");

    setTimeout(() => {
        chara2.classList.toggle("chara2Win0Blue")
        chara2.classList.toggle("chara2BaseBlue")
    }, "4200");
}