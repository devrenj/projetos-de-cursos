/* 
Variáveis
*/

// tipos primitivos: boolean, number, string
  let ligado: boolean = false;
  let nome: string = 'Beto';
  let idade: number = 31;
  let altura: number = 1.94;

  // null
  let nulo: null = null
  let indefinido: undefined = undefined

  // Tipos abrangentes:
  // any
  let qualquerCoisa: any = false; // Aceita qualquer tipo de dados
  // void
  let retorno: void // Não retorna nada, apenas vazio
    // function executaQuery() :void {
    //   let a: number = 1
    //   return a
    // } // Void não permite retorno! Usado para apenas executar o que está dentro do bloco

  // Objeto (sem previsibilidade)
    let objeto: object = {
      nome: 'nome',
      idade: 30,
      pais: 'br'
    }

    // Tipando um objeto (Struct)
    type produtoLoja = {
      nome: string,
      preco: number,
      unidades: number;
    }

    // Objeto (Com previsibilidade)
    let meuProduto: produtoLoja = {
      nome: 'brigadeiro',
      preco: 10,
      unidades: 20
    }

/* 
Arrays
*/

let dados: string[] = ['beto', 'roberto', 'nóbrega', 'jr', 'devrenj'];
let dados2: Array<string> = ['beto', 'roberto', 'nóbrega', 'jr', 'devrenj'];
let infos: (string | number)[] = ['Beto', 31, '1', 1]; // Aceita dois valores independente da ordem

/* 
Tuplas
*/

let boleto:[string, number, number] = ['agua', 31302104, 500.0]; // Determina o tipo e a ordem que devem aparecer

/* 
Arrays 
métodos
*/

// Conhecimentos reaproveitáveis de Javascript
dados.push
dados.length
dados.join
dados.map
dados.filter
dados.forEach
dados.reduce

/* 
Datas
*/

let calendario:Date = new Date();
const data: string = calendario.toLocaleDateString();
const hora: string = calendario.toLocaleTimeString();
console.log(data+' '+hora)

/* 
Funções
*/

function addNumber (x: number, y: number): number { // Recebe number, outro number e retorna number
  return x + y;
}

function addToHello(name: string){
  return `Hello ${name}`;
}

console.log(addToHello('Beto'))

let soma: number = addNumber(22,13);
console.log(soma);

// Função Multi-tipos
function callToPhone(phone: number | string): number | string {
  return phone;
}