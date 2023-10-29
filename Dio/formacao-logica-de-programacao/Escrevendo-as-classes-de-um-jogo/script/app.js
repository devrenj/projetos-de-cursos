class Personagem {
  constructor(nome, idade, tipo, sexo, arma){
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
    this.sexo = sexo;
    this.arma = arma;
  }

  atacar() {
    const genero = this.sexo === 'm' ? 'O' : 'A';
    console.log(`${guerreiro.tipo.} ${genero} ${this.tipo} ${this.nome}[${this.idade}] atacou usando ${this.arma}`)
  }
}

let guerreiro = {
  tipo : {m: 'Guerreiro', f: 'Guerreira'},
  arma : 'espada',
  ataque : 'fisico',
  fisico : 25,
  magico : 0,
  defesa : {fisica : 5, magica : 0},
  vida : 500,
  velocidade : 25,
  peso : 200
}

const personagem1 = new Personagem('Furiosa', 18, guerreiro.tipo.m, 'm', guerreiro.arma);
const personagem2 = new Personagem('Tayson', 20, 'Monge', 'm', 'artes marciais');
const personagem3 = new Personagem('Midnighter', 120, 'Mago', 'm', 'magia');
const personagem4 = new Personagem('Mata Hari', 31, 'Ninja', 'f', 'shuriken');

personagem1.atacar()
// personagem2.atacar()
// personagem3.atacar()
// personagem4.atacar()