'use strict';

function createCharacter(name, nickname, race, origin, attack, defense, health, weapons) {
  return {
    name,
    nickname,
    race,
    origin,
    attack,
    defense,
    health,
    weapons,
    alive: true,
    describe() {
      let weaponString = '';
      for (let i = 0; i < weapons.length; i++) {
        if (i + 1 === weapons.length) {
          weaponString = weaponString.slice(0, weaponString.length - 2);
          weaponString += ` and ${weapons[i]}`;
        }
        else
          weaponString += `${weapons[i]}, `;
      }
      return `${this.name} is a ${this.race} from ${this.origin} who wields ${weaponString}.`;
    },
    calulateDamage(attack, defense) {
      return defense > attack ? 0 : (attack - defense) * 10;
    },
    evaluateFight(character) {
      this.health -= this.calulateDamage(character.attack, this.defense);
      character.health -= this.calulateDamage(this.attack, character.defense);
      if (this.health <= 0) {
        this.alive = false;
        return `${character.nickname} takes ${this.calulateDamage(this.attack, character.defense)} damage and ${this.nickname} receives ${this.calulateDamage(character.attack, this.defense)} damage
        \n${character.name}'s remaining health is ${character.health}\n${this.name} has been defeated!`;
      }
      else if (character.health <= 0) {
        character.alive = false;
        return `${character.nickname} takes ${this.calulateDamage(this.attack, character.defense)} damage and ${this.nickname} receives ${this.calulateDamage(character.attack, this.defense)} damage
        \n${this.name}'s remaining health is ${character.health}\n${character.name} has been defeated!`;
      }
      else {
        return `${character.nickname} takes ${this.calulateDamage(this.attack, character.defense)} damage and ${this.nickname} receives ${this.calulateDamage(character.attack, this.defense)} damage
        \n${this.name}'s remaining health is ${this.health}\n${character.name}'s remaining health is ${character.health}`;
      }
    }
  };
}

//data set
const characters = [
  new createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 12, 6, 120, ['a walking stick', 'Glamdring the Foe-hammer']),
  new createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 3, 1, 80, ['The One Ring']),
  new createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 5, 2, 90, ['Sting', 'Barrow Blade']),
  new createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 9, 8, 150, ['Andúril', 'Bow']),
  new createCharacter('Legolas Greenleaf', 'legolas', 'Sindarin Elf', 'Mirkwood', 10, 5, 105, ['Bow of the Galadhrim', 'Dual Long Knives'])
];

characters.push(new createCharacter('Arwen Undomiel', 'arwen', 'Half-Elf', 'Rivendell', 7, 7, 115, ['Hadhafang', 'Nîn o Chithaeglir', 'Other Spells']));

//Find aragorn in the character array
const findAragorn = characters.find(character => character.nickname === 'aragorn');
console.log(findAragorn.describe());

//This way of unning filter is the same as the line below
/*const hobbits = characters.filter(function (character) {
  return character.race === 'Hobbit';
});*/
const hobbits = characters.filter(character => character.race === 'Hobbit');

//usign filter
const highAttackers = characters.filter(character => character.attack > 5);

//destructuring an array
const [gandalf, bilbo, frodo, aragorn, legolas, arwen] = characters;

for (let i = 0; i < (Math.floor(Math.random() * 20) + 5); i++) {
  let opponent1 = Math.floor(Math.random() * characters.length);
  let opponent2 = opponent1;
  while (opponent2 === opponent1) {
    opponent2 = Math.floor(Math.random() * characters.length);
  }

  console.log(
    `Match ${i + 1} will be ${characters[opponent1].name} against ${characters[opponent2].name}.
    \n${characters[opponent1].describe()}
    \n${characters[opponent2].describe()}
    `
  );

  if (!characters[opponent1].alive)
    console.log(`${characters[opponent1].nickname} is already dead so ${characters[opponent2].nickname} wins.`);
  else if (!characters[opponent2].alive)
    console.log(`${characters[opponent2].nickname} is already dead so ${characters[opponent1].nickname} wins.`);
  else
    console.log(`${characters[opponent1].evaluateFight(characters[opponent2])}\n\n\n`);
}

const livingCharacters = characters.filter(character => character.alive === true);
const deadCharacters = characters.filter(character => character.alive === false);


console.log('\n\n\nThe survivors of the tournament are: ');

for (let item of livingCharacters) {
  console.log(`${item.name}\n`);
}

console.log('\n\n\nThose not so lucky: ');
for (let item of deadCharacters) {
  console.log(`${item.name}\n`);
}

