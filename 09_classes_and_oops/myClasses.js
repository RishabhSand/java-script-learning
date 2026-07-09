// ES6

// class User {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }

// }

// const name = new User("Rishabh", "rishuu@gmail.com", "123")

// console.log(name.encryptPassword());
// console.log(name.changeUsername());

// behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const name2 = new User("Mivaan", "mivaan@gmail.com", "123")

console.log(name2.encryptPassword());
console.log(name2.changeUsername());