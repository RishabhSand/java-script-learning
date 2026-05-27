console.log("Rishabh");
let age= 19
let gender = 1
let loggenIn = true

//Primitive :-
// boolean= true/false
// null => standalone value
// undefined => not defined
// symbol => unique
// string
// Number
// Bigint


//Non primitive datatypes (reference) :-
// arrays, object, Functions




console.log(typeof null); //object
console.log(typeof undefined);//undefined

//********************************************//
/*
Stack ( Primitive), Heap (non-primitive)
*/

let name= "Rishabh"
let anothername= "Mivaan"
anothername= "Parshav"

console.log(name);
console.log(anothername);

let user1 = {
    name: "rishabh",
    email :"rishabhsandgoglecom"
}
let user2 = user1
user2.email = "google.com"

console.log(user2.email);
console.log(user1.email);
