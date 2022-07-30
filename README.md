<h1 align="center">
    <br>
    Projeto Final {reprograma}
    <p align="center"> Mentorando<p>
</h1>


## 💻 **Projeto Final - Mentorando**
<br>

 <p align ="justify"> API desenvolvida como Projeto Final com o auxílio da professora Hannah Freitas para a conclusão do curso de Backend {Reprograma}.



<p align ="justify"> Este projeto nasceu a partir da importancia e do impacto que vi que as mentorias que foram fornecidas ao longo do curso, teve em mim e em minhas colegas, ouvir trajetorias e dicas sempre nos dava um gás e uma motivação a mais, principalmente nos momentos complicados onde parecia que o conteúdo parecia impossivel de ser absorvido, percebi que se outras pessoas, tanto as que estão em inicio de carreira, como aquelas que estão em transição de carreira pudesse ter contato com alguem da area que almeja entrar, conseguiria ter uma dimensão melhor de como é o trajeto, saber um pouco sobre o dia-a-dia... entre tantas outras dúvidas que permeiam a escolha de uma profissão.


 <p align="justify"> Acreditando que há pessoas que se disponibilizariam a ajudar, o objetivo principal da construção dessa API, é conectar pessoas interessadas em ser mentoradas sobre a profissão desejada, com profissionais que têm a possibilidade e disponibiidade de mentorar, doando seu tempo e experiência. 


<br>


## 🚀 Descrição da API Mentorando


<br>


<p align="justify">O projeto é uma API REST que permite que pessoas com conhecimento em determinada área, que se disponibiizem a doar um pouco de seu conhecimento e tempo sejam voluntárias e, consigam se cadastrar, descrevendo informações sobre área de atuação, disponibilidade, de forma objetiva, para que haja a conexão com os participantes dessa iniciativa que estejam procurando mais conhecimento sobre a área desejada, onde irá conter um cadastro para os mentores no qual disponibilizará o meio de comunicação melhor para que o mentorado o localize e entre em contato, conseguindo acesso as informações de quem está cadastrado no sistema.

<p align="justify">A interface é um CRUD completo integrado com o banco de dados, onde é possível listar todos os mentores, tendo as opções de cadastrar novos usuários, atualizar os dados e deletar o cadastro do usuário. 


<br>


## ⚙️ Funcionalidades/Objetivos


- Listar todos os mentores que estão cadastradas no sistema;
- Listar os mentores por ID.
- Cadastrar pessoas que estejam interessadas em ser um mentor(a);
- Atualizar os dados desse mentor(a);
- Deletar o profissional caso não queira continuar no projeto;
<br>

## 📚 Aprendizados

O projeto final consiste em uma API fundamentada no CRUD, que são:  CREATE (CRIAR), READ(LER-CONSULTA), UPDATE(ATUALIZAR) e DELETE(DESTRUIÇÃO). 

<br>

## 🛠️ Tecnologias utilizadas nesse projeto

<br>

Para a construção do projeto, as seguintes tecnologias foram utilizadas:

- [JavaScript](https://www.javascript.com/)
- [Git/Github](https://github.com/)
- [Node.js](https://nodejs.org/en/)
- [MongoDb](https://www.mongodb.com/)
- [MongoDBatlas](https://www.mongodb.com/cloud/atlas)
- [Postman](https://www.postman.com/)
- [Vscode](https://code.visualstudio.com/)
- [heroku](https://dashboard.heroku.com/apps)  

### Pacotes Utilizados 

- [Express](https://expressjs.com/pt-br/)
- [Nodemon](https://nodemon.io/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [Mongoose](https://mongoosejs.com/)
- [cors](https://www.npmjs.com/package/cors)

<br>

## 📁 Arquitetura MVC 

```
 📁 Projeto-f
   |
   |-  📁 src
   |    |
   |    |- 📁 Controller
   |         |- 📑 mentorController.js
   |     
   |
   |    |- 📁 database
   |         |- 📑 mongoConfig.js
   |
   |
   |    |- 📁 models
   |         |- 📑 mentorSchema.js
   |         
   |
   |    |- 📁 routes
   |         |- 📑 mentorRoutes.js 
   |
   |    |- 📑 app.js
   |
   |
   |- 📑 .env
   |- 📑 .env.example
   |- 📑 .gitignore
   |- 📑 package-lock.json
   |- 📑 package.json
   |- 📑 Procfile
   |- 📑 README.md
   |- 📑 server.js
```
<br>

## 🔃 Rotas

* local: http://localhost:9009

* Heroku: https://.herokuapp.com/

    * Utilize o [Postman](https://www.postman.com/) para para chamar e testar os endpoints da API localmente ou via Heroku

<br>

## 🔃 Retorna teste com apresentação: 

| Método HTTP  | Endpoint                     | Descrição                            |
| ------------ | ---------------------------- | ------------------------------------ |
| GET          | `http://localhost:9009/`     |  Mensagem de apresentação (Index)    |             |

<br>

## 🔃 Manipulação das Rotas de Usuários:

| Método HTTP  | Endpoint                | Descrição                            |
| ------------ | ----------------------- | ------------------------------------ |
| GET          |  /mentor/all/                 | Retorna todos os usuários            |
| POST         | /mentor/create                 | Cria/cadastra um novo usuário        |
| PUT          | /mentor/update/:id        | Altera informações de um usuário     |
| DELETE       | /mentor/delete/:id         | Deleta um usuário específico         |

<br>

## ✅ Dados da Collection

- id: gerado automaticamente 
- Mentor(a): string e true
- Profissão : string e true
- email: string e true
- whatsapp: string e true
- linkedin: string e true

<br>

## 🚧 Melhorias para o futuro (Em construção)

* Refatorar os códigos inserindo autorização, autenticaçao e testes.
* Implementar o front end para uma melhor navegação e interação com a aplicação.