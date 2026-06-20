const instaUser = new Object(); // singleton

// instaUser = {}; // normal

//console.log(instaUser);

instaUser.id = "Rishabh2007";
instaUser.email = " Rishabh@gmail.com"
instaUser.loggdin = false;

// console.log(instaUser);


const facebookUser = {
    email: "Rishabhsand@gmail.com",
    fullname:{
        userfullame:{
            firstname: "Rishabh",
            lastname: "Sand"
        }
    }
}
// console.log(facebookUser.fullname);
// console.log(facebookUser.fullname.userfullame);


const obj1 = {1:"a", 2:"b"};
const obj2 = {3:"c", 4:"d"};
// const obj3 = {obj1, obj2}
//console.log(obj3); // doesnt combine objects nicely

// const obj3 = Object.assign({},obj1,obj2); // combines objects nicely // if {} no added then it mean all the object is being added to object 1,best way is to add {} this to the syntax.
// console.log(obj3);


// const obj3 = {...obj1,...obj2}; // best way to combine objects nicely
// console.log(obj3);


console.log(Object.keys(instaUser)); // gives all the keys of the object
console.log(Object.values(instaUser)); // gives all the values of the object
console.log(Object.entries(instaUser)); // gives all the key value pairs of the object