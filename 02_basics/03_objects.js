// singleton
//object.creates

// object literals

const mySym = Symbol("key1");

const JsUser= {
    name: "Rishabh",
    [mySym]:"mykey1",    "full name": "Rishabh Sand",
    age: 19,
    location: "Faridabad",
    email: "RishabhSand2007@gmail.com",
}

// console.log(JsUser.name) // not a correct way but can be used ( "." automatically  understands that the data is a string)
// console.log(JsUser["name"]) // (correct way to access the data)
// console.log(JsUser["full name"]) 
// console.log(JsUser[mySym]) // to access the symbol data we have to use square brackets and pass the symbol variable name.


// JsUser.email = "Rishabh@google.com" // to update the data
// Object.freeze(JsUser) // to freeze the object (after freezing we can't update or add any data in the object)
// JsUser.email = "Rishabh@microsoft.com"
// console.log(JsUser)



JsUser.greetings2 = function(){
console.log(`hello JS user ${this.name}`)


}
JsUser.greeting = function(){
    console.log("hello JS user")
}
console.log(JsUser.greeting())
console.log(JsUser.greetings2())