class Personagem {
  constructor(nome, idade, tipo, sexo, arma) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
    this.sexo = sexo;
    this.arma = arma;
  }

  atacar() {
    const genero = this.sexo === 'm' ? 'o' : 'a';
    console.log(`${
      genero
    } ${this.tipo} ${this.nome}[${this.idade}] atacou usando ${this.arma}`);
  }
}

const guerreiro = {
  tipo: 'Mago',
  arma: 'espada',
  ataque: 'fisico',
  fisico: 25,
  magico: 0,
  defesa: { fisica: 5, magica: 0 },
  vida: 500,
  velocidade: 25,
  peso: 200,
};

const personagem1 = new Personagem('Furiosa', 18, guerreiro.tipo, 'f', guerreiro.arma);

personagem1.atacar();
