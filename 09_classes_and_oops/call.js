function SetUserName(username){
    this.username = username
}

function CreateUser (username, email, password){

    SetUserName.call(this, username)
    this.email = email;
    this.password = password;
}

const loginId = new CreateUser("Rishabh", "Rishu@gmail.com", "acd@123")
console.log(loginId)