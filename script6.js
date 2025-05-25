//funzioncina console.log
function consoleMe() {
    console.log("I was triggered");
    
}

// 2. Events & Listeners
// click event: 3 options
// a. onclick="" [Elemento pre-esistente]
// b. node.onclick
let myButton = document.getElementById("my-button");
// myButton.onclick = consoleMe;
// c. node.addEventListener("click", functionName)
myButton.addEventListener("mouseleave", (event) => {
    console.log("Ciao");
    console.log(event);

    
})
// 2 more listeners: mouseenter, mouseleave
// onkeypress="" [elemento pre-esistente]

// 3. Window onload
// Executive code + functions library
// window.onload =  mainFunction() 