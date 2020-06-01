'use strict';

function createCharacter(name, nickname, race, origin, attack, defense) {
  return {
    name,
    nickname,
    race,
    origin,
    attack,
    defense,
    describe() {
      return `${this.name} is a ${this.race} from ${this.origin}`;
    },
    calulateDamage(attack, defense) {
      return defense > attack ? 0 : attack - defense;
    },
    evaluateFight(character) {
      return `${character.nickname} takes ${this.calulateDamage(this.attack, character.defense)} and you receive ${this.calulateDamage(character.attack, this.defense)}`;
    }
  };
}

let gandalf = new createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6);
let bilbo = new createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1);

console.log(gandalf.evaluateFight(bilbo));