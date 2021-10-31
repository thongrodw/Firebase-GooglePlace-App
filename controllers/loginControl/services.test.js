const { json } = require('express');
const {signInWithEmail} = require('./service')

function sum(a,b){
    return a+b
}

test("Test sum function", () => {
  let a = 1
  let b = 2
  expect(sum(a,b)).toBe(3);
});

test("Test sum function", () => {
    let a = 3
    let b = 2
    expect(sum(a,b)).toBe(5);
  });