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
