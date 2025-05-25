//calculator

// DEFINIZIONE ALGORITMO:
// 1. Ingredienti (input)
// Segno matematico, valore: +, -, *, /, 0, ..., 9

// 2. Qual è il nostro output?
//  "il risultato"   

//Aspetti di acquisizione dei dati dall'utente:
// Elementi utili dal DOM:
// Cosa devo catturare?
// Display, Segni di operazione, cifre da 0...9

// Listeners
// Quali fra gli elementi definiti sopra devono possederli?
// Su tutti i bottoni con cifre, segni di operazione, AC ed uguale 

// Funzioni
// Quali funzioni sono strettamente necessarie?
// Sicuramente i tasti AC e = dovranno scaturire una funzione!

// Bonus
// E se volessimo implementare le operazioni a catena? 

//Elementi del DOM
let display = document.getElementById("display"); // Elemnto singolo HTM
let operatorEls = document.getElementsByClassName("operator"); // Cosa sarà salvato qau dentro? Array!
let digitEls = document.getElementsByClassName("digit"); // Array

//Input fondamentali
let firstVal = ""; // Valore iniziale
let secondVal = ""; // Valore finale
let operator =  null; // Operatore
let finResult = null; // Risultato finale
//Listeners
for(const operatorEl of operatorEls) {
    operatorEl.addEventListener("click", (event) => {
        operator = event.target.value;
    });
}

//Operandi
for(const digitEl of digitEls) {
    digitEl.addEventListener("click", (event) => {
        if(operator == null) {
            firstVal += event.target.value;
            display.value = firstVal;
         } else {
            secondVal += event.target.value;
            display.value = secondVal;
         }
       
     });
}
function resultCalc() {
    if (!firstVal || !secondVal || operator == null) {
        return;
    } 
    switch (operator) {
        case '+': //addizione
            finResult = +firstVal + +secondVal;
            
            break;
        case '-': //Sottrazione
            finResult = +firstVal - +secondVal;
            
            break;      
        case '*': //Moltiplicazione
            finResult = +firstVal * +secondVal;
            
            break;
        case '/': //Divisione
        finResult = +firstVal / +secondVal;
        
            break;
         
    } 
    display.value = finResult; 
    // Inizializzazione degli operatori e segno operazione
    firstVal = finResult
    secondVal = ""
    operator = null;
}

function resetCalc() {
    display.value = "0";
    firstVal = ""
    secondVal = ""
    operator = null;
}