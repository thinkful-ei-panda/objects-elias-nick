'use strict';

let loaf = {
    flour: 300,
    water: 210,
    hydration() { //if this was an arrow function 'this' would not work correctly
        return this.water / this.flour * 100;
    }
};

function People(name, jobTitle, boss) {
    this.name = name;
    this.jobTitle = jobTitle;
    this.boss = boss;
}

let people = [
    new People('martin', 'First-Man', 'marty'),
    new People('marty', 'CEO'),
    new People('jerry', 'Accountant', 'marty')
];

for (let i = 0; i < 3; i++) {
    if (typeof people[i].boss === 'string')
        console.log(`${people[i].name} ${people[i].jobTitle} reports to ${people[i].boss}`);
    else
        console.log(`${people[i].name} ${people[i].jobTitle} doesn't report to anybody.`);
}

