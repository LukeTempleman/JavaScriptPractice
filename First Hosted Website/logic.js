

let message = 'This is a test site that ive made to learn a bunch of new things from and mess around with'
alert(message)
result = prompt("the question is....... does this work?")
alert(`${result} ... oof okay`)
confirm("Well i guess this is my...")
alert("Hello World!")

function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divid(a,b){
    return a / b;
}



/**
 * this will be used to export all our functions to our unit tests
 */
module.exports = {
    add:add,
    subtract:subtract,
    multiply:multiply,
    divid:divid};
