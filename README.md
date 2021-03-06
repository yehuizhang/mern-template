# User List

This is a course project assgined by USTSV Javascript course

## Introduction

A user list web application.

Features:

- Responsive UI

Technology Stack:

- Node
- Express
- MongoDB
- React
- React-Redux
- Redux-Thunk
- Material UI
- React-Router-Dom
- Axios

## Initialization

### Node

```bash
npm i -g concurrently
```

### Server

```bash
git init
npm init # node initialization
npm i -D concurrently eslint prettier eslint-plugin-prettier nodemon
./node_modules/.bin/eslint --init # eslint configuration
npm i express mongoose
touch .gitignore
```

### Client

```bash
npx create-react-app client
# remove yarn.lock and client/node_modules
npm i redux react-redux redux-devtools-extension redux-thunk
npm i axios prop-types react-router-dom
npm i -D eslint prettier eslint-plugin-prettier babel-eslint
npx install-peerdeps --dev eslint-config-airbnb
```

## Start

Server: `npm run server`
Client: `npm run client`
