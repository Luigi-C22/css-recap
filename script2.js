//* [JS] Array

//TODO: switch-case

//CONDITIONALS
//? 0.a L'else if
/* let gender ="Male";

if (gender === "Male") {
    console.log("Benvenuto!");
    
} else if(gender === "Female" ) {
    console.log("Benvenuta!");
    
} else {
    console.log("Ciao!");
    
} */

//? 0.b Switch-case
/* let gender = "Female";
switch (gender) {
    case "Male":
        console.log("Benvenuto");
        
        break;
    case "Female":
        console.log("Benvenuta!");

        break;
    case "Not binary":
        console.log("Benvenut*!");
    break;

    default:
        console.log("Ciao");
        break;

}
 */

//DATI STRUTTURATI
//? 1. Array
/* let arr = [ 1, "2", {three: "cacchio"}, [4,5]];
console.log(arr[2].three); */


//? 2. Array complessi
//a. basic
/* let array = [1,2,3,4,5];
console.log(array[3]); */

//b. simil db
/* let students = [
    {name: "Paulina", note: 5},
    {name: "Alex", note: 6},
    {name: "Diana", note: 4}
];
console.log(students[0].note);
console.log(students[1].name);
 */

//c. Matrice
/* let matrix = [
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ]
];
console.log(matrix[1][2]); */

//? 3. Metodi per gli array
//Es. slides:
let array = [1, 2, 3, 4, 5, 6, 7];
//proprietà length
//console.log(array.length); //Output 7

//METODI COMUNI
//a. concat [output Type: Array]
//let modArray = array.concat(8, 9)
//console.log(modArray);
//console.log(array);

//b. indexOf [Output Type: Int]
//console.log(array.indexOf("sega"));

//c. lastIndexOf [output Type: Int]
//console.log(array.lastIndexOf("sega"));

//d. pop (M) [output Type: Any]
//array.pop();
//console.log(array);

//e. push (M) [output TYpe: Int]
//array.push(8, 9, 10);
//console.log(array.push(8,9,10));

//f. slice (estremeo destro ESCLUSO!) [output Type: Array]
/* console.log(array.slice(2, 6));
console.log(array); */

//g. includes [output Type: Boolean]
//console.log(array.includes(6)); //output: true

//h. join [output Type: String]
//console.log(array.join("§"));

//i. splice(x, y) (M) (A posizione x, togli y elementi successivi!) [output Type: Array]
/* console.log(array.splice(4, 2)); // Output: 
console.log(array); */


//? 4. Ciclare un Array
//a. FOR classico
/* for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
     //Loop 1: index = 0 , array[0] = 1, index++ = 1
     //Loop 2: index = 1 , array[1] = 2, index++ = 2
     //Loop 3: index = 2 , array[2] = 3, index++ = 3 
     //[...]
}
 */
//b. FOR-of
/* for (let element of array){
    console.log(element);
    
} */
document.addEventListener("DOMContentLoaded", function () {
    /* document.querySelector(".premilo").addEventListener("click", function () {
        let container = document.getElementById("imageContainer");
        if (!document.getElementById("dynamicImage")) */
        
        const mostraBtn = document.querySelector(".premilo");
        const nascondiBtn = document.querySelector(".rimuovi");
        const container = document.getElementById("imageContainer");
        
        mostraBtn.addEventListener("click", function() {
            if (!document.getElementById("dynamicImage")) {

            let img = document.createElement("img");

            img.src = "https://cdn.pixabay.com/photo/2023/06/11/14/45/ai-generated-8056181_1280.jpg"
            img.alt = "immagine dinamica";
            img.id = "dynamicImage";
            img.style.width = "350px";
            img.style.marginTop = "10px";
            img.style.borderRadius = "20%";
            
            container.appendChild(img);
        }
    });

    nascondiBtn.addEventListener("click", function() {
        let img = document.getElementById("dynamicImage");
        if (img) {
            img.remove();
          ;  
        }
    });

});



