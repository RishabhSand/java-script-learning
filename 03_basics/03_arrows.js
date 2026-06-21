// const chai = function(){
//     let username = "Rishabh"
//     console.log(this.username)
// }
//  chai()


const chai =() => {
    let username = "Rishabh"
    console.log(username)
}

// chai(this)

// const addtwo = (num1, num2) => { // if curly braces are used then we need to use return keyword to return the value
//       console.log(num1 + num2)
//     return num1 + num2;
// } 
// addtwo(2, 3)

const addtwo = (num1, num2) => (num1 + num2)
// console.log(addtwo(2, 3)) // if we don't use curly braces then we don't need to use return keyword to return the value



 const newname = (name) => ({username: "Rishabh"}) // if we want to return an object then we need to wrap the object in parentheses otherwise it will be treated as a block of code and we will get an error
 console.log(newname(this)) 