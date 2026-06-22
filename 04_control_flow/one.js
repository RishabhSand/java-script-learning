//    const name = "Rishabh";
//    const temperature = 41

//    if(temperature <50){
//     console.log("temperature is less than 50");
//    }
//    else{
//    console.log("temperature is greater than 50");
// }

   // <,>,<=,>=,==,===,!=,!==

   const score = 200
   if(score>100){
    const power = "fly"
    // console.log(`user power : ${power}`);
  }

//   console.log(`user power : ${power}`); // ReferenceError: power is not defined outside the block scope of if


// const balance  = 1000;
// if(balance <500){
//     console.log("low balance");
// }
// else if(balance<900){
//     console.log("medium balance");
// }
// else if(balance<1500){
//     console.log("high balance");
// }




const userloggedin = true;
const debitcard = true;
const loggedinfromgoogle = false;
const loggedinfromemail = true;

if(userloggedin && debitcard){ // both conditions should be true
    console.log("you can buy");
}
if(loggedinfromgoogle || loggedinfromemail){ // either of the condition should be true
    console.log("you can log in");
}


