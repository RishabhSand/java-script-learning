//array

 const myArr = [0, 1, 2, 3, 4, 5, 6]
// console.log(myArr[1])

//array mehtods

// myArr.push(7) // Adds the no. to the end
// myArr.push(8)
// console.log(myArr)

// myArr.unshift(5)
// console.log(myArr); // adds the no. to the begining of an array


// myArr.shift()
// console.log(myArr); // removes the first element of an arry


const newArr = myArr.slice(1,3) // includes only 1 and 2 no. only 
console.log("A",myArr);
console.log(newArr)

const newArr2= myArr.splice(1,3) // includes 1,2 and 3 no. from array and also removes them from the original arr
console.log("B",myArr)

console.log(newArr2)

