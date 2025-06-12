// Immediately Invoked Fucntion Expressions (IIFE)

(function chai (){
    // named IIFI
    console.log(`DB CONNECTED`);
    
}) ();

(() => {
    console.log(`DB CONNECTED TWO`);
    

})();

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
    

})('rohit')

// iife done