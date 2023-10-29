# Escrevendo as Classes de um Jogo

> *Curso: Formação lógica de programação*
>
> *Instituição: Dio - Digital Innovation One*
>
> *Instrutor: Felipe Aguiar*
>
> *Ano: 2023*
> 
> *Material de apoio: [NOTION](https://helpful-jump-17b.notion.site/Mapa-de-aventura-91f3e9bd923842149d4dba754dc65c07)*
>
> *Linguagem: JavaScript*
> 
> *Versão do compilador: Node 18.15.0*

## Resumo de aprendizagem: [Learn.md](/LEARN.MD)

### Conceitos utilizados para realização do desafio

## Regras de negócio

### Escrevendo as classes de um Jogo

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções
- Classes e Objetos

## Objetivo:

Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )

além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)

## Saída

Ao final deve se exibir uma mensagem:

- "o {tipo} atacou usando {ataque}"
  ex: mago atacou usando magia
  guerreiro atacou usando espada

### LICENSE

Copyright (c) 2023 Roberto Nóbrega Jr. ([@devrenj](https://www.github.com/devrenj)) under MIT License
