class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const name = new Teacher("Rishabh", "Rishabh@.com", "123")

name.logMe()
const name1 = new User("RishabhSand")

name1.logMe()

console.log(name instanceof User);