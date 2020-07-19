# GOSTACK - Conceitos do Node JS

![](https://img.shields.io/badge/made%20by-fernmac-04d361?style=flat&color=04d361) 
![](https://img.shields.io/github/languages/count/fernmac/gostack-conceitos-nodejs?style=flat&color=04d361) 
[![GitHub stars](https://img.shields.io/github/stars/fernmac/gostack-conceitos-nodejs?style=social)](https://github.com/fernmac/gostack-conceitos-nodejs/stargazers)

Aplicação para armazenar repositórios, que irá permitir a criação, listagem, atualização e remoção dos repositórios, e além disso permitir que os repositórios possam receber "likes".

------------

## Instalação

- Para iniciar a instalação é necessário clonar o repositório

  ```shell
  git clone [url_repositorio]
  ```
    
- Entrar no diretório clonado

  ```shell
  cd gostack-conceitos-nodejs
  ```
  
- Instalar as dependências do projeto via **NPM** ou **YARN**

  ```shell
  npm install
  ```

## Execução

- Executar o comando para iniciar o back-end

  ```shell
  npm run dev
  ```

## Rotas

### **`POST`** `/repositories`

A rota deve receber title, url e techs dentro do corpo da requisição, sendo a URL o link para o github desse repositório. Ao cadastrar um novo projeto, ele deve ser armazenado dentro de um objeto no seguinte formato: { id: "uuid", title: 'Desafio Node.js', url: 'http://github.com/...', techs: ["Node.js", "..."], likes: 0 }; Certifique-se que o ID seja um UUID, e de sempre iniciar os likes como 0.

### **`GET`** `/repositories`

Rota que lista todos os repositórios.

### **`PUT`** `/repositories/:id`

A rota deve alterar apenas o title, a url e as techs do repositório que possua o id igual ao id presente nos parâmetros da rota.

### **`DELETE`** `/repositories/:id`

A rota deve deletar o repositório com o id presente nos parâmetros da rota.

### **`POST`** `/repositories/:id/like`

A rota deve aumentar o número de likes do repositório específico escolhido através do id presente nos parâmetros da rota, a cada chamada dessa rota, o número de likes deve ser aumentado em 1.
