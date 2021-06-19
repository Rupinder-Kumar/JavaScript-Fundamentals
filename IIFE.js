// IIFE - Immediated invoked functions expressions
// IIFE are used to avoid namespace collision
// IIFE gets called immediately javascript started executing
// Variable scoper is local in 
// IIFE has local variable scope i.e variables declared inside an IIFE can't be access outside/global execution context, even if declared with var keyword
// IIFE enables us to attach private data to a function, it creates a fresh environment for us, so that we don't pollute Global execution context

(function() {
    var a = 5;
    console.log(a) // 5
})();

console.log(a) // Reference Error: a is not defined
//using arrow function
(() => {})();