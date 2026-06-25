// const coding = [ "js", "python","cpp", "java" ]

// const value = coding.forEach((item) => {
//     // console.log(item);
//     return item
// })
// console.log(value)

// const myNums = [ 1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num) => num >  4)
// console.log(newNums)

// const newNums = []
// myNums.forEach((num) => {
//     if(num >4){
//         newNums.push(num)
//     }
    
// });

// console.log(newNums)



const userbooks = [
    {
        title:"book one",
        genre: "history",
        publish: 1999,
        edition: 2000
    },
    {
        title:"book two",
        genre: "science",
        publish: 1999,
        edition: 2005
    },
    {
        title:"book threee",
        genre: "maths",
        publish: 1986,
        edition: 2003
    },
    {
        title:"book four",
        genre: "history",
        publish: 1947,
        edition: 1998
    }
]


//const books = userbooks.filter( (bk) => bk.genre === "history" )

let books = userbooks.filter( (bk) => bk.publish > 1950)
console.log(books)