'use strict';

let loaf = {
  flour: 300,
  water: 210,
  hydration() { //if this was an arrow function 'this' would not work correctly
    return this.water / this.flour * 100;
  }
};

console.log(loaf.hydration());
