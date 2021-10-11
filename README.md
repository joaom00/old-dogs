<h1 align="center">
  <img width="200" src="./.github/dogs-logo.svg" />
</h1>

Dogs é um instagram para cachorros onde o usuário pode publicar uma foto, comentar e curtir. Nessa aplicação utilizo, na parte web, [React](https://reactjs.org) com [TypeScript](https://www.typescriptlang.com), [Styled Components](https://styled-components.com) para os estilos e o [React Query](https://react-query.tanstack.com) para gerenciar os estados do servidor que foi feito em [Node](https://nodejs.org/en/) com [Express](https://expressjs.com/pt-br/) e [TypeORM](https://typeorm.io/#/).

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/joaom00/dogs">
  <img alt="GitHub License" src="https://img.shields.io/github/license/joaom00/dogs"> 
  <img alt="GitHub Last Commit" src="https://img.shields.io/github/last-commit/joaom00/dogs"> 
  <img alt="GitHub Follow" src="https://img.shields.io/github/followers/joaom00?label=Follow"> 
  <img alt="GitHub Stars" src="https://img.shields.io/github/stars/joaom00/dogs?style=social"> 
</p>

<div align="center">
  <a href="#package-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-como-executar">Como Executar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="todo">Todo</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="https://www.figma.com/file/qZVVZzTWNF4SrAUqDqdiG2/Dogs?node-id=201%3A2">Figma</a>
</div>

<img src="./.github/dogs.jpg" />

## 📦 Tecnologias

- Frontend
  - [ReactJS](https://reactjs.org)
  - [Typescript](https://www.typescriptlang.org)
  - [React Router](https://reactrouter.com)
  - [Styled Components](https://styled-components.com)
  - [React Query](https://react-query.tanstack.com)
- Backend
  - [NodeJS](https://nodejs.org/en/)
  - [Typescript](https://www.typescriptlang.org)
  - [PostgreSQL](https://www.postgresql.org)
  - [Express](https://expressjs.com/pt-br/)
  - [TypeORM](https://typeorm.io/#/)
  - [JWT](https://jwt.io)

## 🚀 Como Executar

##### Clone o repositório

```
git clone https://github.com/joaom00/dogs.git
```

##### Executando o Server

```
cd server
yarn
yarn typeorm migration:run
yarn dev
```

##### Executando o Client

```
cd client
yarn
yarn start
```

## Todo

| Status  | Funcionalidade        |
| :-----: | --------------------- |
| &#9744; | Editar foto de perfil |
| &#9744; | Redefinir senha       |
| &#9744; | Excluir comentário    |
| &#9744; | Excluir publicação    |
| &#9744; | Pesquisar usuários    |
| &#9744; | Seguir usuários       |
| &#9745; | Pubicar fotos         |
| &#9745; | Comentar nas fotos    |
| &#9745; | Curtir as fotos       |
| &#9745; | Criar conta           |
| &#9745; | Logar em uma conta    |

## License

[MIT License](./LICENSE)
