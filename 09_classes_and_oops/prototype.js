let myName = "Rishabh     "

// console.log(myName.length)



let myHeroes = [ "thor", "spiderman"]

let heroPower = {
    thor: "Hammer",
    spiderman: "Sling",

    getspiderPower: function(){
        console.log(`spiderman power is ${this.spiderman} `)
    }
}

Object.prototype.Rishabh = function(){
    console.log(`Rishabh is present in all object`)
}

Object.prototype.helloRishabh = function(){
    console.log(`Rishabh says hello`)
}

// heroPower.Rishabh()
// myHeroes.Rishabh()
// heroPower.helloRishabh()
// myHeroes.helloRishabh()

//inheritance

const User = {
    name: "Rishabh",
    email: "Rishabh@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User


// modern syntax for inheritance

Object.setPrototypeOf(TeachingSupport, Teacher)
 let username = "Rishabh          "
String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`${this.myName}`)
    console.log(`the true length is: ${this.trim().length}`)
    
}

username.trueLength()