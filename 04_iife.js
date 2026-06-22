//Immediately Invoked Function Expression (IIFE)
//wrap the function in parentheses and then call it immediately after the closing parenthesis

(function damn(){
    console.log("I am a god")
})(); // semicolon is needed here because database wont know where to end the function

( () => {
    console.log("i am god again")
})()


