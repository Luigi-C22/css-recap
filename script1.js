//* [JS] if-else & loops

// TODO: Recap of steps 10 -> 15 in my epicode basic js repo!

//CONDITIONALS
//? 1. l' if
//if (condition) { Do this if CONDITION is TRUE! }
/* let myBool = true
if (myBool === true) {
    console.log("Sono nell'IF");
} */

//? 2. if-else
// if(CONDITION) { Do this if CONDITION is TRUE!} else { Do this if CONDITION is FALSE }

/* let myName = "Luipgi"
if (myName === "Luigi") {
    console.log("Sei Luigi");
} else {
    console.log("Non sei Luigi");
}
 */

//? 3. if + AND/OR conditions
// if(COND1 && COND2) { Do this if both CONDITIONS are TRUE! }
// if(COND1 || COND2) { Do this if at least one CONDITION is true }
/* if((20 > 10) || (5 > 12)) { 
    console.log("Sono nell'IF");
} else {
    console.log("Sono nell'ELSE");
} */


//? 4. if senza condizioni (Truthy or Falsy values)
// Falsy: false, 0, "", null, undefined, NaN, document.all
// Truty: Everything else...
/* 
if("ciao") { 
    console.log("Sono nell'IF");
} else {
    console.log("Sono nell'ELSE");
}
 */

//? 5. Operatore ternario (assegnazione condizionale)
/* let onSale = true;

let price = onSale ? 79 : 99;
console.log(price); */

//LOOPS
//? 6. Il ciclo for
/* for (let i = 1; i <= 5; i+=2) {
 console.log(i);
}
 */
//alterazioni del ciclo
//? 7. Il break
/* for (let i = 0; i < 10; i++) {
    if(i === 5) {
        break;
    }
    console.log(i);
    
} */
//? 8. Il continue
/* for (let i = 0; i < 10; i++) {
    if(i === 5) {
       continue;
    }
    console.log(i);
} */

    //? 9. Il ciclo WHILE
    let n=0, x=0;
    while(n<30){
        n++;
        x +=n;
        console.log("N", n);
        console.log("X", x);
    }
    console.log(x);