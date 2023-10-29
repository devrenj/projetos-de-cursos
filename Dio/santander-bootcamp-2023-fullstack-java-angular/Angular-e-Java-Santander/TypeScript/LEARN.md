# Trabalhando com TypeScript

> *Bootcamp: Java + Angular (Santander)*
>
> *Instituição: Dio - Digital Innovation One*
>
> *Instrutor: Felipe Aguiar*
>
> *Ano: 2023*

## Conceitos e resumos

### Instalando

- Iniciar o node no repositório do projeto:

```nodejs
npm init -y
```

- Instalar o TypeScript apenas no projeto, prática eficiente para versões:

```nodejs
npm install typescript -D
```

### Executando

- Para executar o TypeScript, execute:

```nodejs
npx tsc arquivo
```

- `NPX` é o termo para Node Package eXecute
- O TSC é o TypeScriptCompiler e faz a Transcompilação do arquivo .ts para .js
- Automatizando a execução: No arquivo PACKAGE.JSON, dentro de script, iniciamos o comando "start:" adicionando os comandos `NPX` anteriormente executados manualmente
- *Facilidade*: Através do comando:

```nodejs
node install ts-node-dev
```

pode-se adicionar um servidor local que entende TS e adicionando ao PACKAGE.JSON, dentro de script, "`start:dev`" com "`ts-node-dev`", "`--respawn`" para retornar o arquivo e "`--transpile-only`" com o endereço para apenas transpilar o arquivo .ts

- Isso serve para não ficar criando arquivos (builds) novas e para ter uma visualização das alterações em tempo real, basta executar no CLI do Node o script:

```nodejs
node run start:dev
```

### Customizando

- Criar o arquivo de configuração do TypeScript:

```nodejs
npx tsc --init
```

- É possível alterar váriaveis de configurações. Na seção TOOLS da documentação do TS é possível ver as variáveis possíveis e na seção PLAYGROUND é possível visualizar as opções de configuração através de uma interface

### Console Log

- Console log apenas cria um meio de retorno de algo, não é exibido de fato e não é um dado a ser trabalhado, para isso se usa o retorno de um método (no TS seria uma `string`)
