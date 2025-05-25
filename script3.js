// Lezione M2 D5

// Le funzioni di javascript

//Functions
//1. Perché usare le funzioni?
// a. DRY
// b. manutenzione del codice
// c. Portabilità del codice (librerie)

// 2. Definire una funzione (senza argomenti)
/* function greeting() {
    console.log("Ciao");
    console.log("Belli");
}
 */
// 3. Richiamare una funzione
// greeting();  //Output: Ciao Belli


// 4. Costruire una funzione (saluto personalizzato)
/* function specGreet(name1, name2) {
    console.log("Benvenuto " + name1 + " " + name2);
    
}
specGreet("Marco", "Luigi"); //Output: Benvenuto Paulina */



// 5. costruire una funzione (fattoriale di n)
// Target: Costruire una funzione che calcoli il fattoriale di un numero intero.
// Cosa significa fattoriale di un numero intero n?
// Cosa significa "Ritornare" un valore?

/* function factorial(num) {
    let res = 1;
    for (let i = num; i > 0; i--) {
        res *= i;
    }
    return res; 
    
}
let result = factorial(5); //Output: 120 
console.log(result); //Output: 120

 */

// 6. Costruire una funzione (rilevatore parità/disparità)
//Target: costruire una funzione che rilevi la parità o la disparità di un numero
// Cosa sono i controlli d'integrità?
function evenOrOdd(intNum) {
    if (intNum % 2 === 0) {
        return "PARI";

    } else if(intNum % 2 === 1) {
        return "DISPARI";

    } else if (isNaN(intNum)) {
        return "Non è un numero";
    }
}
console.log (evenOrOdd("4").toLowerCase()); //Output: DISPARI

// 7. Metodi per le stringhe
//N.B. La stringa in JS è un array!
//a. toLowerCase / toUpperCase [output: String]
    // let myString = "Mappamondomondo";
 //   console.log(myString.toLowerCase()); //Output: mappamondo
 //   console.log(myString.toUpperCase()); //Output: MAPPA MONDO 
//b. includes [output: Boolean]
//let subStr = "mondo";
// console.log(myString.includes(subStr)); //Output: true

//c. concat [output: String]
//console.log(myString.concat(" ",subStr)); //Output: Mappamondo Ciao

//d. repeat [output: String]
//console.log(myString.repeat(5," ")); //Output: MappamondoMappamondoMappamondo

//e. replace [output: String]
// console.log(myString.replace("mondo", "terra")); //Output: Mappamondo

//f. replaceAll [output: String]
//console.log(myString.replaceAll("mondo", "terra")); //Output: Mappamondo


// BONUS: Funzioni anonime & Arrow functions (Cenni)
// ECMScript 2015
// Funzioni anonime
// let myFunc = function() { //una funzione anonima
//     console.log("Hello world");
//}; myFunc()
// Arrow functions
// let myOtherFunc = () => {
//    console.log("Questo viene stampato da una Arrow function");
// }; myOtherFunc();