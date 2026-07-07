// const promiseOne = new Promise(function(resolve, reject){
//     // Do an async task
//     // DB calls, cryptography, network
//     setTimeout(function(){
//         console.log("Async task is completed ")
//         resolve()
//     }, 1000);
    
// } )

// promiseOne.then(function(){
//     console.log("Promise is completed")
// })


// const promiseTwo = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         console.log("Asyn2 task is completed")
//         resolve()
//     }, 1000);

// })

// promiseTwo.then(function(){
//     console.log("Promise2 is executed")
// })





// const promiseThree = new Promise (function(resolve,reject){
//     setTimeout((user) => {
//         resolve({username: "Rishabh",
//                 email:"Rishabhsand2007@gmail.com"}
//         )
//     }, 1000);

// })

// promiseThree.then(function(user){
//     console.log(user)
// })
 
const promisefour = new Promise( (resolve, reject) => {
   let error = true
    if(!error ){
    resolve({ username: "Rishabh" , password: "123455678"})
    } else {
        reject(`Error: something went wrong`)
    }
})

promisefour.then(function(user){
console.log(user);
return user.username;
})
.then ((username) => {
    console.log(username)
})
.catch((error) => {
    console.log(error)
}).finally(() => 
    console.log(" promise is either resolved or rejected"))


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = true;
    if(!error == true){
        resolve({username:"Javascript", Password: "1234"})
    } else{
        reject("Error: JS went wrong")
    }
    },1000);
    
})
 async function promiseFiveConsumed(){
 try {
     const response = await promiseFive
  console.log(response);

 } catch (error) {
    console.log(error);
    
 }
}
promiseFiveConsumed();


// async function getAllUsers(){
//    try {
//      const response = await fetch('https://api.github.com/users')
//     const data = await response.json()
//     console.log(data)
//    } catch (error) {
//      console.log("E: ", error)
//    }
// }

// getAllUsers()


fetch("https://api.github.com/users")
.then((response)=> {
 return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=> {
    console.log("E:",error)
})