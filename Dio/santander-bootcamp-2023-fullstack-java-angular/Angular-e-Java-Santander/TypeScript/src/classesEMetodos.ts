// Classes

/* 
Data
modifiers

Private - Pode ser acessado somente por dentro da classe
Public - Pode ser acessado por todos
Protected - Pode ser acessado somente por dentro da classe e subclasses

Readonly - Não pode ser alterada externamente
*/

class Character {
  // Superclass
  public name?: string; // Se colocado o símbolo ? a propriedade se torna opcional
  STR: number;
  Skill: number;

  constructor(name: string, STR: number, Skill: number) {
    this.name = name;
    this.STR = STR;
    this.Skill = Skill;
  }
  public attack(): void {
    console.log(`Attack with ${this.STR} points`);
  }
}

const p1 = new Character('Ryu', 10, 20);
p1.attack();
// p1.name = 'Ryu'
// console.log(p1.name)

class Magician extends Character {
  // Subclass
  magicPoints: number;
  constructor(name: string, STR: number, Skill: number, magicPoints: number) {
    super(name, STR, Skill);
    this.magicPoints = magicPoints;
  }
}

const p2 = new Magician('Baal', 0, 20, 10);

// Generics
// Deixa em aberto o tipo que irá passar depois por parâmetro
// ... é um "spread"

// function concatArray(...itens: any[]) :any[]{
//   return new Array().concat(...itens);
// }

function concatArray<T>(...itens: T[]) :T[]{
  return new Array().concat(...itens);
}

const numArray = concatArray<number[]>([1, 5], [3]);
const strArray = concatArray<string[]>(['ab', 'kjf'], ['zzz'])

// numArray.push('saitama'); // Passou a dar erro depois de tipar os arrays

console.log(numArray);
console.log(strArray);