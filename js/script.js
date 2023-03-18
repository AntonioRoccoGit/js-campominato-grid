/**
 * L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
 */

// DOM ELEMENT
const myGrid = document.querySelector(".grid");
const playButton = document.getElementById("play-button");
// level selection
const lvlSelect = document.getElementById("level-select");



playButton.addEventListener("click", function(){
    //cleaning the prev grid

    myGrid.innerHTML = "";

    if (lvlSelect.value === "hard"){
        boxGeneration(100, "hard");

    }else if (lvlSelect.value === "medium"){
        boxGeneration(81, "medium");
       
    }else {
        boxGeneration(49, "easy");
    }
})

/////////////////////////
// MY FUNCTION

//box click handle
function boxClick() {
    console.log(this.innerHTML);
    this.style.backgroundColor = "rgb(26, 174, 233)";
}

/**
 * A funciont that generate my grid Box
 * @param {numb} numbBox 
 * @param {string} lvlMode 
 */
function boxGeneration(numbBox, lvlMode) {
    for(let i = 1; i <= numbBox; i++ ){
        let myBox = document.createElement("div");
        myBox.classList.add("box", lvlMode);
        myBox.innerHTML = i;
        myBox.addEventListener("click", boxClick);
        myGrid.append(myBox);
    }
}