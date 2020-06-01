'use strict';
/*
let loaf = {
  flour: 300,
  water: 210,
  hydration() { //if this was an arrow function 'this' would not work correctly
    return this.water / this.flour * 100;
  }
};
*/

function decode(encodedWord) {
  const string = encodedWord[0];
  const cipher = {a: 1, b: 2, c: 3, d:4};
  if (string in cipher === false) {
    return ' ';
  }
  return encodedWord[cipher[string]];
}

function decodeWords(message) {
  let decoded = '';
  const array = message.split(' ');
  for (let i=0; i<array.length; i++) {
    decoded += decode(array[i]);
  }
  return console.log(decoded);
}

decodeWords('craft block argon meter bells brown croon droop');
