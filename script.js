'use strict';

let loaf = {
  flour: 300,
  water: 210,
  hydration() { //if this was an arrow function 'this' would not work correctly
    return this.water / this.flour * 100;
  }
};

let ojct = {
  foo: 'string',
  bar: 8,
  fum: {one:1, two:4},
  quux: [4,'loop',8],
  spam: 'callers'
};

for (let key in ojct) {
  console.log(key +' '+ ojct[key]);
}
console.log(loaf.hydration());
