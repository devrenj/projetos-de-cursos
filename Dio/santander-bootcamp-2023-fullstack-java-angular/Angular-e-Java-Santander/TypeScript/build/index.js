"use strict";
class Character {
    constructor(name, STR, Skill) {
        this.name = name;
        this.STR = STR;
        this.Skill = Skill;
    }
    attack() {
        console.log(`Attack with ${this.STR} points`);
    }
}
const p1 = new Character('Ryu', 10, 20);
p1.attack();
class Magician extends Character {
    constructor(name, STR, Skill, magicPoints) {
        super(name, STR, Skill);
        this.magicPoints = magicPoints;
    }
}
const p2 = new Magician('Baal', 0, 20, 10);
function concatArray(...itens) {
    return new Array().concat(...itens);
}
const numArray = concatArray([1, 5], [3]);
const strArray = concatArray(['ab', 'kjf'], ['zzz']);
console.log(numArray);
console.log(strArray);
