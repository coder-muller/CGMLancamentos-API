# Fastify API Boilerplate

Este repositório serve como um ponto de partida para criar e configurar rapidamente uma API usando [Fastify](https://www.fastify.io/), documentada com [Swagger](https://swagger.io/) e uma interface de documentação amigável usando [Scalar](https://github.com/scalar/scalar).

## Recursos
- Fastify para um servidor HTTP rápido e eficiente
- Swagger para documentação da API
- Scalar UI para uma interface visual amigável

## Requisitos
Antes de iniciar, certifique-se de ter instalado:
- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## Instalação
1. Clone este repositório:
   ```sh
   git clone https://github.com/coder-muller/fastify-api-boilerplate.git
   cd fastify-api-boilerplate
   ```
2. Instale as dependências:
   ```sh
   npm install
   # ou
   yarn install
   ```

## Uso
### Iniciar o servidor
Para rodar o servidor em modo de desenvolvimento:
```sh
npm run dev
# ou
yarn dev
```
O servidor será iniciado em `http://localhost:3333`.

### Acessar a documentação
- Scalar UI: `http://localhost:3333/docs`

## Estrutura do Projeto
```
/
├── src/
│   ├── routes.ts
│   ├── server.ts
│   ├── types.ts
├── package-look.json
├── package.json
├── README.md
├── tsconfig.json
```

## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir uma _issue_ ou enviar um _pull request_.


