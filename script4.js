//* [JS] Il DOM (Document Object Model)
// Array.push(); // Metodo
// alertMe(); // Funzione
// Array.length; // Proprietà

// 1. Get Element By Id
// Seleziona l'elemento che vuole cambiare colore
/* let myEl = document.getElementById("make-me-red");
console.log(myEl);
 */

// 2. Get element By Class Name
// Seleziona gli elementi con classe bottom-div
/* let myEls = document.getElementsByClassName("bottom-div");
console.log(myEls); */

// 3. Get element By Tag Name
// Seleziona gli elementi di tipo <li>>
/* let myElsList = document.getElementsByTagName("li");
console.log(myElsList);
 */
// 4. Query Selector
// Seleziona il primo <li> con classe fake-item
/* let myFakeLi = document.querySelector("li.fake-item");
console.log(myFakeLi);
 */
// 5. Query Selector All
// Seleziona tutti gli <li> con classe item
/* let myItemLi = document.querySelectorAll("li.item");
console.log(myItemLi); */

// 6. node.children
// Seleziona tutti ifigli del <div> con list-title
/* let divContainer = document.getElementById("list-title");
console.log(divContainer.children); //proprietà */

// 7. node.innerText
// Cattura il testo contenuto nel <div> con il make-me-red
/* let myRedDiv = document.getElementById("make-me-red");
console.log(myRedDiv.innerText);  */

// 8. node.style.color
// Accontenta il dv che vuole diventare rosso!
/*  let myDivRed = document.getElementById("make-me-red");
 myDivRed.style.color = "red";
 myDivRed.style.backgroundImage = "url('https://www.w3schools.com/w3images/lights.jpg')";
 console.log(myDivRed); */
 

// 9. node.classlist.add / remove / toggle
// a. Togli la classe complete dall'<ul>.
// let myUl = document.getElementById("features");
// myUl.classList.remove("complete");
// console.log(myUl);

// b. Aggiungi una classe test all'<ul>.
// myUl.classList.add("test");

// c. Esegui il toggle della classe my-list sull'<ul>.
// myUl.classList.toggle("my-list");

// 10. onclick
// Lancia una funzione alertMe() (che produce un alert) al click sul button con id my-button
/* function alertMe() {
alert("io esco fuori in un popup");
console.log("Il tasto è stato premuto");

} */

// 11. createElement
// a. Inserisci un nuovo elemento <div> nel DOM.
// let myNewDiv = document.createElement("div");

// b. inserisci un testo nel <div> appena creato  sopra, cambia il testo al suo interno in rosso ed assegnagli un id new-div
/* myNewDiv.innerText = "Sono il nuovo DIV";
myNewDiv.style.color = "red";
myNewDiv.id = "new-div";

console.log(myNewDiv); */

// c. Iniettiamo il <div> appena creato e personalizzato alla fine del <div> con id main-content.
// let myMainContent= document.getElementById("main-content");
// myMainContent.appendChild(myNewDiv);
// d. document.getElementById("main-content").appendChild(newDiv);
// let myNewUl = document.getElementById("features");  
// myMainContent.insertBefore(myNewDiv, myNewUl);
// e.