const arr = [1,2,3];

// const total = arr.reduce(function(acc,currvalue ) {
//     console.log(`acc: ${acc} and current value is ${currvalue}`)
//     return acc + currvalue
// },0)


const total = arr.reduce( (acc,curr) => acc+curr ,0)
 
console.log(total)