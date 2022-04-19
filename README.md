# town-hall-frontend

## Sobre o projeto

O sistema tem como objetivo o cadastro e a visualização de escolas de uma prefeitura, bem como suas respectivas turmas.

## Demonstração

Fique a vontade para testar as funcionalidades do site [aqui](https://town-hall-framework.web.app/).

## Instalação

### Requisitos:
- [Node.js](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)
- [Vue.js](https://vuejs.org/)

### Execução:
Uma vez com os requisitos instalados, basta executar o comandos 
```
npm install
```
para instalar as dependências, e depois, 
```
npm run serve
```
para rodar o servidor.

## Construção

O frontend do projeto foi feito com:
- [Vue.js](https://vuejs.org/)
- [Vuetify](https://vuetifyjs.com/en/)

O backend do projeto foi feito com:
- [Firebase](https://firebase.google.com/)

## Vue.js

O frontend da aplicação foi construído em Vue.js, um framework Javascript focado na criação de Single-page Applications, bem como em responsividade. Com isso, a aplicação funciona bem em qualquer tipo de tela.

## Firebase

A plataforma escolhida para o 'backend' foi a Firebase, que é uma plataforma desenvolvida pelo Google para a criação de aplicativos móveis e da web. 
Sua base de dados noSql armazena os dados em JSON e são sincronizados em tempo real, o que significa que se um usuário atualiza algum valor, todos os outros usuários tem os dados atualizados sem necessidade de recarregar a página e realizar uma nova consulta ao banco de dados.
Além disso, a base de dados é multiplataforma e armazena os dados em disco, caso o usuário fique offline.


## Funcionamento

A tela principal lista as escolas cadastradas, permite o filtro de escolas por nome, o cadastro de novas escolas e a visualização dos detalhes de uma escola selecionada.

Caso o usuário deseje visualizar as turmas de uma escola, basta clicar no botão de detalhes, que ele será redirecionado para a tela de lista turmas.

A tela de turmas permite que o usuário veja as turmas da escola selecionada. Também permite a criação de novas turmas para a mesma escola.
