"use strict";
let ligado = false;
let nome = 'Beto';
let idade = 31;
let altura = 1.94;
let nulo = null;
let indefinido = undefined;
let qualquerCoisa = false;
let retorno;
let objeto = {
    nome: 'nome',
    idade: 30,
    pais: 'br'
};
let meuProduto = {
    nome: 'brigadeiro',
    preco: 10,
    unidades: 20
};
let dados = ['beto', 'roberto', 'nóbrega', 'jr', 'devrenj'];
let dados2 = ['beto', 'roberto', 'nóbrega', 'jr', 'devrenj'];
let infos = ['Beto', 31, '1', 1];
let boleto = ['agua', 31302104, 500.0];
dados.push;
dados.length;
dados.join;
dados.map;
dados.filter;
dados.forEach;
dados.reduce;
let calendario = new Date();
const data = calendario.toLocaleDateString();
const hora = calendario.toLocaleTimeString();
console.log(data + ' ' + hora);
function addNumber(x, y) {
    return x + y;
}
function addToHello(name) {
    return `Hello ${name}`;
}
console.log(addToHello('Beto'));
let soma = addNumber(22, 13);
console.log(soma);
function callToPhone(phone) {
    return phone;
}
