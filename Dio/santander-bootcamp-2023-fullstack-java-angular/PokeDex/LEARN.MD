# Desafio de Projeto: PokéDex API

> *Curso: Bootcamp Java + Angular (Santander)*
> 
> *Instituição: Dio - Digital Innovation One*
> 
> *Mentor: Renan Johannsen*
> 
> *Ano: 2023*

## Conceitos e resumos

### Template Strings

Uma forma dinâmica de receber Strings, permitindo utilizar recursos como variáveis através da sintaxe `${nomeDaVariavel}`, por exemplo:

```javascript
const nome = 'texto';

`Esta é uma template string de nome: ${nome}.`

// Retornará: Esta é uma template string de nome: texto.
```

### Funções auxiliares do JavaScript

- `.map()` - Auxilia a manipulação de uma lista, diminuindo a verbosidade do código
- `.join()` - Separa os elementos de um array com uma vírgula (por default)

### Assíncronismo

O JavaScript executa o código sequencialmente, programação assíncrona é quando precisamos que um código seja executado após acontecer alguma coisa

### Função anônima

É uma alternativa à função. Podemos definir uma função diretamente dentro de outra função. Exemplo:

```javascript
setTimeout(function() {
  console.log("Essa mensagem é exibida depois de 3 segundos");
}, 3000);
```

### Arrow function

Também pode-se escrever a mesma função de callback como uma arrow function (ES6). Exemplo:

```javascript
setTimeout(() => {
  console.log("Essa mensagem é exibida depois de 3 segundos");
}, 3000);
```

### CallBack function

Garantem que uma função não seja executada antes que uma tarefa seja concluída, logo após, devolve o código assíncrono e evitam erros. Exemplo:

```javascript
 const mensagem = function () {
  console.log("Essa mensagem é exibida depois de 3 segundos");
}

setTimeout(mensagem, 3000);
```

### Fetch API

Biblioteca já integrada nos browsers mais modernos. Fornece uma definição genérica de objetos de Request e Response (e outras coisas envolvidas com solicitações de rede) trabalhando com processamento assíncrono, por padrão a requisição é um GET (se não especificar). Como resposta o fetch retornará uma string

- Outros clientes: Axios, Jquery

### Promise

São respostas assíncronas de dados recebidos por meio de requerimentos entre navegador e servidor

- O resultado de uma promise estará em `Network > Response` e melhor detalhado em `Network > Preview`
- O resultado entregue de uma promise estará detalhado em `Response Headers > Content Type`

### Estrutura de uma Promise

As promises tem uma estrutura semelhante a de tratamento de erros `try-catch`:

- `Then()`: Equivale ao `try` e trata o sucesso da promise (código de requisição 200)
- `Catch()`: Trata o fracasso da promise (código 500)
- `Finally()`: Trata independente do resultado da promise (sucesso/fracasso)

### Request headers

São as configurações do navegador, indica quais os tipos esperados de dados e outras propriedades que serão usadas ao fazer uma requisição ao servidor

### Response headers

São as configurações do servidor, informando detalhes dos dados que estão sendo recebida pelo navegador em forma de requisição

### HTML Collection

Se for executado o comando: `console.log(document.getElementsByClassName('nomeDaClasse'))` em uma Ordered List, recebemos um HTML collection, que seria um elemento com várias informações como um array. Para selecionar individualmente, tratamos o elemento pelo ID, assim, se estiver dentro de um `laço for` (por exemplo), iteramos cada item dessa lista

### Query Strings

São strings geradas pelo método GET que aparecem na URL da barra de endereços, através da estrutura:

> `?variável=valor&variável=valor`

- `?` - Inicia a query string
- `variável` - Define de onde será capturado o valor
- `valor` - Captura o valor
- `&` - Permite capturar mais de um valor, indicando continuação

### LICENSE

Copyright (c) 2023 Roberto Nóbrega Jr. ([@devrenj](https://www.github.com/devrenj)) under MIT License
