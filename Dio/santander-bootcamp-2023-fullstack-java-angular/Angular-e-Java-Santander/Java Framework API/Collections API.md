# Collection Framework API Java

> *Curso: Bootcamp Java + Angular (Santander)*
> 
> *Instituição: Dio - Digital Innovation One*
> 
> *Mentor: Camila Andrade*
> 
> *Ano: 2023*
> 
> *Material de apoio: [REPO](https://github.com/cami-la/collections-java-api-2023)*
> 
> *Ano: 2023*
> 
> *Linguagem: Java*
> 
> *Versão do compilador: JDK 17.0.4*

## Requisitos

- IDE Java
- JDK 17

## Resumo de aprendizagem

### Collections

É uma classe utilitária do Java para operações comuns em coleções

- Presentes no Java.util

### Generics Type

Termo usado para a tipagem de uma determinada lista, map ou objeto usando `<>` diamond operator (Java 7)

Além das vantagens, está a melhora de desempenho pois evita o uso de conversões (cast)

### Comparable X Comparator

Comparable - presente na biblioteca java.lang, é uma forma de ordenação que afeta a classe original de uma coleção, realizado através do método `.compareTo()` e passando a lista através do método `.sort()`

Comparator - presente na biblioteca java.util, é uma forma de multiplas ordenações que não afetam a classe original de uma coleção pois se instancia uma nova classe que estende comparator, realizado através do método `.compare()` e passando a lista através do método `.sort()`

- Método `.sort()` para para ordenação em ordem crescente

- Método `.sort()` acompanhado de `.reverseOrder()` para para ordenação em ordem crescente

### List interface

A interface `list` é uma coleção ordenada que permite a inclusão de elementos duplicados e se assemelha a uma matriz com comprimento dinâmico

### Set interface

### Map interface

É uma interface utilizada para mapear dados na forma de chaves e valores. Cada chave só representa um valor portanto não podem ser repetidas, já os valores podem

### Conceitos citados

- Predicate
- Optionals
- Tratamento de exceções

### LICENSE

Copyright (c) 2023 Roberto Nóbrega Jr. ([@devrenj](https://www.github.com/devrenj)) under MIT License
