// Immediately Invoked Function Expression (IIFE)
// We use the iife to remove the polution of the global scope

(function chai(){
    // named IIFe
    console.log(`DB CONNECTED`);
})();


( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('Hitesh')