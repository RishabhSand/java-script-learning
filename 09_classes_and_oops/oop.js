// const user = {
//     username: "Rishabh",
//     loginCount: 8,
//     SignedIn: true,

    // getUserDetails: function(){
    //     // console.log(this.username)
    //     console.log(this)
    // }

// }
// console.log(user.username)
// console.log(user.getUserDetails())


function user(username, loginCount, SignedIn){
      this.username = username;
      this.loginCount = loginCount;
      this.SignedIn = SignedIn;
      return this
}   

const user1 =  new user("Rishabh",12, true)
const user2 =   new user("RishabhSand",6, false)
console.log(user1)

