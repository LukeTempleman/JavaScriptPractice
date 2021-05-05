const { test, expect } = require("@jest/globals");
const { add , subtract , multiply,divid} = require("./logic");


test("Should add 2 values together",() =>{
    const text = add(10,4);
    expect(text).toBe(14);
});


test("Should minus 2 values",() =>{
    const text = subtract(10,4);
    expect(text).toBe(6);
});


test("Should multiply 2 values",() =>{
    const text = multiply(10,4);
    expect(text).toBe(40);
});

test("Should divid 2 values",() =>{
    const text = divid(12,4);
    expect(text).toBe(3);
});