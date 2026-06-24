// for in loop

const myObject = {
    js: "java script",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`)
    
}

 //for objects use for in loop and for arrays use for of loop