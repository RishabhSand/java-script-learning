 // scopes {}


 function one(){
    const username = "Rishabh";

    function two(){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website) // website is not defined

    // two()

 }

//  one() 


if(true){
    const username = "Rishabh";
    if(username === "Rishabh"){
      const website = "youtube"
    //   console.log( `the username is ${username} and the website is ${website}` )
    }
    // console.log(website)

}

// // console.log(username)




//+++++++++++++++++ interesting +++++++++++++++++++

console.log(addone(5))
function addone(num){
return num + 1
}


// console.log(addtwo(5)) // cant be declared before initialization ( mini hoisting)
const addtwo = function(num){ // declaration by expression 
    return num + 2
}


