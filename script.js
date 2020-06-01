'use strict';

let loaf = {
  flour: 300,
  water: 210,
  hydration() { //if this was an arrow function 'this' would not work correctly
    return this.water / this.flour * 100;
  }
};

function People(name,jobTitle) {
  this.name = name;
  this.jobTitle = jobTitle;
}

let people = [
  new People('martin','First-Man'),
  new People('marty','CEO'),
  new People('jerry','Accountant')
];

for (let i=0; i<3;i++){
  console.log(people[i].name +' '+ people[i].jobTitle);
}

