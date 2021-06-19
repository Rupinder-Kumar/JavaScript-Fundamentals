// Function Expression
var canada = function() {
    console.log('Cold');
}
// We can declare function expressions with the help of arrow function
var canada = () => {
    console.log('Cold')
}

// Function Declaration
function india() {
    console.log('Warm')
}

// Function Invocation/Execution/Call
canada(); // here canada is defined at run time
india();

// by calling a function javascript engine will create execution context for the function

// Function with arguments
function marry(person1, person2) {
    console.log("arguments", arguments); // arguments are only available to us when we create an new execution context with function
    return `${person1} is now married to ${person2}`;
}

marry("Tim", "Tina");