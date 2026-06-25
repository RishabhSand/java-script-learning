const arr = [1,2,3,4,5,6,7,8,9];

// const newarr= arr.map( (num) => {return num + 10} )
// console.log(newarr)

// arr.forEach( (num,index) => arr[index] = num + 10 )
// console.log(arr)

const newarr = arr
            .map( (num) => num * 10 )
            .map( (num) => num + 1  )
            .filter( (num) => num > 40  )


            console.log(newarr);
            