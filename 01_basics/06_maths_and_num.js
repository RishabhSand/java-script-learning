const num = 500
const score = new Number(1000)
// console.log(score);

// console.log(score.toString().length);
// console.log(score.toFixed(3));

// const newnum = 256.786
// console.log(newnum.toPrecision(5));

// const hundreds = 10000000;
// console.log(hundreds.toLocaleString('en-IN'))
// console.log(hundreds.toLocaleString())

//****************** Maths ********************** */
 
// console.log(Math);
// console.log(Math.abs(-5));
//  console.log(Math.round(5.3));
//  console.log(Math.ceil(5.3));
//  console.log(Math.floor(5.3))
//  console.log(Math.max(5,6,4,2,3,9))
//  console.log(Math.min(5,6,7,4,2,8,1,0));


console.log(Math.random()); // gives random value between 0 and 1
console.log(Math.random() * 10 + 1); //shifts one value to left as multiplied by 10

const max = 50 
const min = 40
console.log((Math.floor((Math.random() * (max - min + 1)) + min)))
// gives random values between 40 and 50
