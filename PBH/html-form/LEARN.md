# Construindo um formulário

> *Curso: Prodabel - Programação Web Curso 1 - HTML e CSS*
>
> *Instituição: Prefeitura de Belo Horizonte*
>
> *Mentor: Lucas Tavares*
>
> *Ano: 2023*

## Conceitos e resumos

### Form

- A tag `<form>` é utilizada para criar formulários

- Deve haver um tratamento das informações tanto no back-end quanto no front-end, antes de guardar no banco de dados, por questões de segurança
- A propriedade `autocomplete` faz com que o navegador permita utilizar um gerenciador de senhas
- onSubmit: Este evento é responsável por validar as informações antes do envio do formulário. Se o usuário pressionar `Enter` será o equivalente a um botão de type submit

### Propriedades

Suas tag filhas (appendChild) tem algumas propriedaes que podem ser usadas também, como:

- Name: Define o nome do elemento
- Method: GET, POST e DIALOG define se os dados serão passados por (Get) Query Strings, (Post) Encapsulados para outra página ou se serão apenas exibidos (Dialog)
- onSubmit: Método que executa ação ao enviar o formulário

### Labels

São os nomes definidos aos campos, são usados também para questões de acessibilidade (aria)
Convenção: Um asterísco `*` após o nome indica um campo obrigatório

### Inputs

São campos criados dentro de um form, consistem em uma tag `<input>` e sua declaração de tipo `type=""`:

- Number: Aceita apenas números (atributos min e max definem limites ao número e step indica em que quantidade o campo aumenta ou diminui)
- Text: Aceita apenas texto
- Textarea: Uma caixa de texto que aceitam várias informações. O tamanho pode ser definido pelas propriedades `rows` para definir a quantidade de linhas e `cols` para definir a quantidade de colunas. A propriedade `autocomplete` pode ser ativada para correção de texto.
- Password: O texto é escondido
- Button: Um botão. Dispara eventos programados
- Particularidade: `onSubmit` deve estar presente no `<form>` para validar o formulário antes de enviar e deve haver um botão de `type="submit"`
- Range: Cria um campo horizontal que se ajusta (aceita atributos min e max)
- Select: Uma caixa de diálogo com escolhas pré-definidas. É necessário atribuir uma tag filha `<option>`
- Particularidade: `Multiple` define seleção múltipla. Se uma tag `<option>` tiver o atributo `Selected`, quando a página for carregada, o select irá apontar para ela
- Color: Caixa de diálogo de cores, que permitem seleção de cores
- E-mail: Aceita apenas e-mails
- URL: Aceita apenas links
- Date: Cria uma caixa de diálogo para inserir datas
- Week: Permite ao usuário escolher a Semana (Compatibilidade)
- Month: Permite ao usuário escolher o Mês (Compatibilidade)
- Checkbox: Cria uma seleção em que podem escolhidos vários campos
- Particularidade: A propriedade `name` deve ter o mesmo nome e grava apenas um valor, pois atribui-se como uma variável comum. Para que sejam enviadas todas as opções, é necessário declarar `name="opcoes[]"`para ser identificado pelo backend que isto é uma lista (método: POST)
- Disabled: Propriedade que oculta o elemento
- Radio: Cria uma seleção em que pode ser escolhido apenas um dos campos
- Particularidade: A propriedade `name` deve ter o mesmo nome para gravar apenas um dos valores
- File: Permite ao usuário selecionar arquivo (atributo multiple permite selecionar vários arquivos)
- Hidden: Um campo invisível do formulário que também será enviado
- Search: Um campo de busca que permite ao usuário limpar a busca (Compatibilidade)

### Referências

- JavaScript
  - [Arrays](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)
  - [Objetos](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Working_with_objects)
  - [Desestruturação](https://www.digitalocean.com/community/tutorials/understanding-destructuring-rest-parameters-and-spread-syntax-in-javascript-pt)

- HTML
  - [Documentação](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/html)
  - [Formulários](https://www.w3schools.com/html/html_forms.asp)
    - [ComboBox](https://como-faz.net/html/select-combobox-dos-paises-do-mundo-html/)

### LICENSE

Copyright (c) 2023 Roberto Nóbrega Jr. ([@devrenj](https://www.github.com/devrenj)) under MIT License
