 function addtwonumbers(number1, number2){
 console.log(number1 + number2);
//  let result = number1 + number2;
//  return result;
 }

//  const result = addtwonumbers(2, 5);
//  console.log(result);


function loginUserMessage(username){
    if(username === undefined){
        return "please enter a username"
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Rishabh"))
// console.log(loginUserMessage())





// function calculatecartprice(...num1){
//     return num1
// }
// console.log(calculatecartprice(50,400,7000))

const user = {
    name: "Rishabh",
    age: 19,
    price: 500,
}

function handleobject(anyobject){
    console.log(`Username is ${anyobject.name} and price is ${anyobject.price}`)
}

// handleobject(user)


const myArray = [200,4000,300,5000]

function returnsecondvalue(){
    return myArray[1]
}
 console.log(returnsecondvalue(myArray))

