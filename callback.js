/**
 * "I will call back later!"
 * A callback is a function passed as an argument to another function.
 * This technique allows a function to call another function
 * A callback function can run after another function has finished
 */

function calculator(num1, num2, callback) {
    let sum = num1 + num2;
    callback(sum);
}

function display(sum) {
    console.log(sum);
}

calculator(20, 300, display);