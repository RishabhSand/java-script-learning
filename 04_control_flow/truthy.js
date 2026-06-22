// falsy values
// false, 0, -0, Bigint 0n, "", null, undefined, NaN

const username=[]
if(username){
    console.log("my name is Rishabh")
} else{
    console.log("first make an an username")
}

//truthy values
// "0", 'false, " ", {} , [], function(){}

const name = {}
if(Object.keys(name).length == 0){
    console.log("this object is empty")
}


//************************************************* */
//nullish coalesing operator (??): null undefined

let value1;
// value1 = 5 ?? 10
value1 = null ?? 10

console.log(value1)

//************************************************* */
// terniary operator
// condition ? true : false

const price = 100;
price > 100 ? console.log("price is high") : console.log("price is good")