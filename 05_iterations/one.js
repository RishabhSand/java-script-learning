//loops

//for

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if (i === 5) {
//         console.log("5 is the best number")
//     }
//     console.log(i);
    
// } 

// for( let i = 1; i<=10; i++){
//     //console.log(`outer loop value is ${i}`)
//     for(let j = 1; j<=10; j++){
//         // console.log(`the inner loop value is ${j}`)
//         console.log(i + '*' + j + '=' + i*j)
//     }
//}


// let myArr = ["Rishabh","Mivaan","Parshav"]
// console.log(myArr.length)
// for (let index = 0; index < myArr.length; index++) {
//     const element = myArr[index];
//     console.log(element)
// }


//break and continue

// for (let i = 1; i <= 20; i++) {
//     if(i===5){
//         console.log("detected 5");
//         break;
//     }
//     const element = i;
//     console.log(`value of i is ${i}`)
// }
for (let i = 1; i <= 20; i++) {
    if(i===5){
        console.log("detected 5");
      continue;
    }
    const element = i;
    console.log(`value of i is ${i}`)
}