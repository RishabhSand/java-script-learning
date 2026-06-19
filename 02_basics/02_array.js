const marvel = ["spirderman","irronman","doctor strange"]
const dc = ['batman','superman','wonderwomen']

// marvel.push(dc)
// console.log(marvel); // array ke andar aaray ban jaata hai

// const newheroes = marvel.concat(dc);
// console.log(newheroes); // merges two arrays

// const allnewheroes= [...marvel, ...dc]
// console.log(allnewheroes); // better way to merge array.

// const newArr = [1,2,[3,4,5],6,[4,5],[7,8,],9]
// const newArr1 = newArr.flat(Infinity);
// console.log(newArr1); // removes sub arrays and combines elements of sub arrays into primary array

// console.log(Array.isArray("Rishabh"))
// console.log(Array.from("Rishabh")) // converts anything to array
// console.log(Array.from({name: "Rishabh"})) // converts object into array but also returns an empty array 



let score1 = 500;
let score2 = 6000;
let score3 = 200;
console.log(Array.of(score1,score2,score3));