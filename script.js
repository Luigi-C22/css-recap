//*Basic javascript

//DATA Types

//? 1. Infinity e NaN
console.log(50/0);
console.log(-50/0);
console.log("ciao"/0);

//? 2. Dato tipo stringa
console.log("hello world");
console.log('ciao mondo');
console.log(`Salve`);

//? 3. Dato booleano
let myBool = true;
console.log(myBool);

//? 4. undefined  e null
let myvar;
console.log(myvar);
let mySecVar = null;
console.log(mySecVar);

// STRUCTURAL TYPES
//? 5. gli oggetti

let student = {
    name: "Gordon",
    surname: "Freeman",
    age: 18,
    batch: "FS-Jun21",
    hasWebcam: true,
}; console.log(student);

//? 6. Somma, Sottrazione, Moltiplicazione, Divisione, Modulo
console.log(15+5);
console.log(20-7);
console.log(20*3);
console.log(50/10);
console.log(19 % 5);

//? 7. PEMDAS

//? 8. L'operatore + con dati numerici, stringhe, misti
console.log("ciao" + 10);

//? 9. parseInt e parseFloat
console.log(parseInt("23") + 12);
console.log(parseInt("a"));
console.log(parseFloat(25012));


//? 10. Operatori logici
 let height = 150;
 let condition = height > 180;
 console.log(condition);

//? Operatori di uguaglianza (==, ===, !=, !==)
//Uguaglianza debole
console.log("73" == 73);
//Uguaglianza stretta
console.log("73" === 73);
//Disuguaglianza debole
console.log("73" != 73);
//Disusguaglianza stretta
console.log("73" !== 73);

//? 12. Gli operatori di Maggioranza/minoranza ( >, >=, <, <=)
//confronto fra numeri
console.log((80 > 20));
//Confronto fra caratteri/stringa
console.log("ciao" > 50);

//? 13. Operatore NOT (!)
console.log(!(120 > 60));

//? 14. Operatore AND (&&)
console.log((120 > 50) && (30 < 50));
console.log((120 > 50) && (30 > 50));

//? 15. Operatore OR (||)
console.log((120 > 50) || (30 < 50));
console.log((120 < 50) || (30 > 50));

alert ("Premi OK per continuare");