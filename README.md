<h1>Sistema de blog</h1>
<h4>Node.js, Express e MongoDB</h4>

<b>Descrição:</b>
<p>
  Este é um sistema de blog simples, porém funcional.
  <br />
  O código foi escrito para ser didático, neste projeto existem várias formas de se fazer uma mesma coisa, algumas comuns, outras nem tanto. Também existem partes bem completas no que se refere a validação de formulário e outras nem tanto.
  <br />
  <b>Reforçando: </b>Este é um projeto didático feito e para fins de demonstração, mas que pode ser fácilmente adaptado para produção, fique a vontade para realizar melhorias.
</p>

<hr />

<b>Funcionalidades: </b>

Cliente:
<ol>
  <li>Visualizar postagens</li>
  <li>Listar postagens por categoria</li>
  <li>Login e registro</li>
  <strike><li>Realizar comentários</li></strike>
</ol>

Administrador:
<ol>
  <li>Publicar postagens</li>
  <li>Editar postagens</li>
  <li>Excluir postagens</li>
  <strike><li>Alterar imagens e cores do site</li></strike>
</ol>
<hr />
Aguarde atualizações...




# BlogNodejs

## Resumo do Projeto
  O iniciei por conta de um [curso](https://www.youtube.com/watch?v=LLqq6FemMNQ&list=PLJ_KhUnlXUPtbtLwaxxUxHqvcNQndmI4B) de Nodejs no Youtube, sendo ele o último projeto prático, e resolvi implementar algumas novas features como: newsletter, painel administrativo, sistema de "Esqueceu a senha?", aba de comentários, respostas aos comentários, sistema de likes e verificação de email utilizando JWT.    

## Principais Tecnologias Utilizadas:
  - Nodejs
  - Mongodb
  - Express
  - Handlebars
  - Bootstrap
  
## Arquivos Principais:
  - [app.js](https://github.com/FelipeColona/BlogNodejs/blob/master/app.js)
     >Rotas principais da aplicação
  - [admin.js](https://github.com/FelipeColona/BlogNodejs/blob/master/routes/admin.js)
     >Responsável pelas rotas exclusivas do administrador
  - [usuario.js](https://github.com/FelipeColona/BlogNodejs/blob/master/routes/usuario.js)
     >Controla principalmente login e registro de usuários
     
## Models do Banco de dados:
  - [Categoria.js](https://github.com/FelipeColona/BlogNodejs/blob/master/models/Categoria.js)
     >Armazena as informações das categorias das postagens
  - [Inscricao.js](https://github.com/FelipeColona/BlogNodejs/blob/master/models/Inscricao.js)
     >Guarda email e data de cadastro dos emails na newsletter, além de controlar a verificação
  - [Postagem.js](https://github.com/FelipeColona/BlogNodejs/blob/master/models/Postagem.js)
     >Salva os dados das postagens como: título, descrição, conteudo, data, categoria pertencente, informações dos comentarios e respostas
  - [Usuario.js](https://github.com/FelipeColona/BlogNodejs/blob/master/models/Usuario.js)
     >Encarregado dos dados dos usuários: nome, email, hash da senha, data de registro, e hierarquia

