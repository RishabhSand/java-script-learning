// for of loop

const arr = [ 1,2,3,4,5]
for (const score of arr) {
    // console .log(score)
}


const greetings = "Hello World"
for (const greet of greetings) {
    // console.log(`the letter is ${greet}`)  
}

// Maps

const map = new Map()
map.set("IN", "India");
map.set("FR", "France");
map.set("USA", "United States Of America")

// console.log(map)


for (const [key, value] of map) {
    console.log(key, ':-', value)
}