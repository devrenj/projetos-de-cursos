# Programando em Java

> *Bootcamp: Java + Angular (Santander)*
> 
> *Instituição: Dio - Digital Innovation One*
> 
> *Instrutor: Glaysson Sampaio*
> 
> *Ano: 2023*
> 
> *Material de apoio: [REPO](https://github.com/digitalinnovationone/trilha-java-basico)*
> 
> *Linguagem: Java*
> 
> *Versão do compilador: JDK 17.0.4*

## Conceitos e resumos

### Pacotes Java

Os pacotes tem a finalidade de organizar e auxiliar ao encapsular classes do projeto utilizando conceitos de visibilidade

### Como criar um pacote Java no VSCode

Este exemplo permite que ao mover um arquivo .java, o VSCode interprete automaticamente o seu `package`

- 01: Criar a pasta com o nome do pacote (ex.: edu)
- 02: Criar subdiretórios que contém o tema ou assunto do programa ou outro identificador (ex.: bootcamp)
- 03: Por convenção o último subdiretório deve conter um resumo do que a parte do programa indicada pelo pacote faz
- Exemplo de pacote: edu.dio.angular.java.calculadoraimc
- Exemplo de diretórios: edu/dio/angular/java/calculadoraimc

### Orientação a Objetos

Usamos classes, métodos e visibilidade para construir e conectar o programa. O conceito de objeto pode conter `dados` na forma de `campos`, também conhecidos como `atributos` e `códigos`, na forma de `procedimentos`, também conhecidos como `métodos`.

### Pilares da POO

- Encapsulamento: Nem tudo precisa estar visível, grande parte do nosso algoritmo pode ser distribuído em métodos, com finalidades específicas que complementam uma ação em nossa aplicação
- Herança: Características e comportamentos comuns, podem ser elevados e compartilhados através de uma hierarquia de objetos
- Polimorfismo: São as inúmeras maneiras de se realizar uma mesma ação
- Abstração: É a indisponibilidade, para determinar a lógica de um ou vários comportamentos, atendendo às necessidades do que está sendo programado

### Encapsulamento

É a possibilidade de proteger alguns dados ou funcionalidades da classe, não permitindo que seus consumidores possam acessá-los

### Herança

É a característica responsável por fornecer mecanismos de reutilização estrutural de características e comportamentos

### Polimorfismo

É a capacidade de referenciar objetos construídos por classes específicas como objetos de uma classe genérica, desde que essa classe genérica respeite a hierarquia em questão

Características:

- Capacidade de tratar objetos criados por classes específicas como objetos de uma classe genérica;
- Capacidade de um objeto poder ser referenciado de várias formas;

### Abstração

### Diferença entre classes e objetos

Antes de um objeto ser criado, devemos definir quais serão suas propriedades e métodos, tais definições são realizadas através de uma classe. A partir de uma classe, podemos construir objetos na memória do computador que executa a nossa aplicação. Usando uma analogia, uma classe funciona como uma “receita” para criar objetos. Inclusive, vários objetos podem ser criados a partir de uma única classe

### Domínio e importancia do pilar de abstração

Abstração é a habilidade de concentrar-se nos aspectos essenciais de um domínio, ignorando características menos importantes ou acidentais. Nesse contexto, objetos são abstrações de entidades existentes no domínio em questão. Com isso, pode-se concluir que a abstração é a maneira de interpretar um contexto de negócio quando desejamos transcrevê-lo como uma aplicação OO

### Métodos

Static - [...]
Abstract - [...]

### Convenções Getters & Setters (Métodos acessores)

- Acessar ou modificar as características de um objeto diretamente não é uma boa prática

### Visibilidade

Public - [...]
Private - [...]
Protected - [...]

### Interface

Não permite multiplas heranças [...]

Características:

- Uma classe implementa uma interface

### Javadoc

É um gerador de documentação criado pela Sun Microsystems, para documentar a API dos programas em  Java. O resultado é expresso em HTML. Comando executado no terminal:

```nodejs
javadoc -encoding UTF-8 -docencoding ISO-8859-1 -d ../docs src/*.java
```

### Tratamento de exceção

Quando inevitavelmente acontece uma exceção, tratamos de acordo com os tipos de erros para que o programa não precise ser encerrado ou reinicializado. O tratamento precisa informar ao usuário o que ele pode fazer para mitigar o erro, resumindo de forma breve o seu motivo

- Erro: O arquivo é encerrado drasticamente (termo: crash)
- Exceção: Fluxos não previstos pela aplicação
- Exceção tratada: Controle de fluxo caso algo não esteja de acordo com os blocos de código para que não haja interrupção bruta do programa
- Interações indevidas: Quando o usuário se expressa de forma inesperada pelo programa

Try - É o bloco de código que está recebendo tratamento, o programa irá tentar executá-lo primeiro
Catch - Caso o bloco try não tenha sucesso, o bloco catch irá tratar a exceção com o seu tipo

Subcategorias:

- Exception: Fluxos não previstos pela aplicação
- Runtime Exception:

Classificação:
O risco da exceção ser disparada e logo precisar tratá-la

- Checked: A exceção precisa ser tratada imediatamente com um bloco try-catch
- Unchecked: A exceção acontece mas não é obrigatório ser tratado

Referência e tipos de exceções: <https://glysns.gitbook.io/java-basico/controle-de-fluxo/estruturas-excepcionais>

### Referências

<https://glysns.gitbook.io/java-basico/>
