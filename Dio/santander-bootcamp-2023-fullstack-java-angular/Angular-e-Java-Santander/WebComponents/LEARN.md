# Projeto: Web Componentes - Shadow Dom

> *Bootcamp: Java + Angular (Santander)*
>
> *Instituição: Dio - Digital Innovation One*
>
> *Instrutor: Felipe Aguiar*
>
> *Ano: 2023*

## Conceitos e resumos

### Organização de conteúdos

- Nesse curso foi possível aprender a organizar melhor as pastas e seus conteúdos de forma limpa

- Assets: Mídia da aplicação

- SRC: ou SouRCe, para manter arquivos executáveis, que contém funções da aplicação
  
  - Components: WebComponents da aplicação

- Style: Estilização da aplicação

### Estudos

- O atributo `defer` é útilizado quando chamamos a tag para orientá-lo a carregar o script somente depois que a página for carregada, é uma convenção padrão de frameworks em geral. No caso da Shadow DOM, como copia a DOM do documento, ela precisa antes esperar carregar tudo para copiar e criar suas modificações

- `this.getAttribute()` - Permite referenciar a propriedade (Prop) para modificá-la através da tag, o nome da propriedade é o parâmetro dentro deste método

- `appendChild` - Anexa hierarquicamente novos filhos à propriedade que for passada

- Passos para criar uma Shadow Dom:
  
  - 01: Criar um objeto (class)
  - 02: Estender ao HTMLDocument (extends)
  - 03: Criar o método construtor herdando o método super
  - 04: Criar uma constante que vai indicar que o objeto pertence à sombra com attachShadow
  - 05: Passar o modo open ou closed no parâmetro `({})`
  - 06: Anexar (append) as funções que serão criadas como propriedades da sombra
  - 07: Definir o customElements com o nome desejado e o nome do objeto
  - 08: Criar a tag customizada (Shadow DOM) no código HTML

## Atividades

- [x]  Criar um style.css somente para os components

### LICENSE

Copyright (c) 2023 Roberto Nóbrega Jr. ([@devrenj](https://www.github.com/devrenj)) under MIT License
