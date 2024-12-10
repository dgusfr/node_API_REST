# ConquisTi Blog API

Este projeto consiste em uma API RESTful para gerenciar usuários e artigos. A API permite criar, editar, listar e excluir artigos associados a usuários autenticados, utilizando autenticação baseada em tokens JWT.

<br>

---

## Sumário

- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Status](#status)
- [Descrição](#descrição)
- [Funcionalidades](#funcionalidades)
- [Documentação da API](#documentação-da-api)
- [Como Usar](#como-usar)
- [Autor](#autor)

<br>

---

## Tecnologias Utilizadas

<div style="display: flex; flex-direction: row;">
  <div style="margin-right: 20px; display: flex; justify-content: flex-start;">
    <img src="images/js.png" alt="JavaScript" width="100"/>
  </div>
  <div style="margin-right: 20px; display: flex; justify-content: flex-start;">
    <img src="images/node.png" alt="Node.js" width="100"/>
  </div>
  <div style="margin-right: 20px; display: flex; justify-content: flex-start;">
    <img src="images/mysql.png" alt="MySQL" width="100"/>
  </div>
</div>

<br>

---

## Status

![Em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=RED&style=for-the-badge)

<br>

---

## Descrição

Esta API foi desenvolvida para gerenciar artigos de blog e autenticação de usuários. Os artigos são vinculados aos usuários que os criaram, e o sistema de autenticação garante que apenas usuários autenticados possam acessar as funcionalidades protegidas.

<br>

---

## Funcionalidades

- Registro e autenticação de usuários.
- Criação de artigos.
- Edição de artigos vinculados ao usuário autenticado.
- Exclusão de artigos.
- Listagem de todos os artigos vinculados ao usuário.

<br>

---

## Documentação da API

<br>

### **Endpoints**

#### **1. Autenticação de Usuários**

- **POST /users/register**

  - Descrição: Registra um novo usuário.
  - Corpo da Requisição:
    ```json
    {
      "email": "user@example.com",
      "password": "senha123"
    }
    ```
  - Resposta:
    ```json
    {
      "message": "Usuário criado",
      "userId": 1
    }
    ```

- **POST /users/login**
  - Descrição: Realiza o login e retorna o token JWT.
  - Corpo da Requisição:
    ```json
    {
      "email": "user@example.com",
      "password": "senha123"
    }
    ```
  - Resposta:
    ```json
    {
      "token": "seu_token_jwt_aqui"
    }
    ```

#### **2. Gerenciamento de Artigos**

- **GET /articles**

  - Descrição: Lista todos os artigos do usuário autenticado.
  - Header:
    ```json
    {
      "Authorization": "Bearer seu_token_jwt_aqui"
    }
    ```
  - Resposta:
    ```json
    [
      {
        "id": 1,
        "title": "Título do Artigo",
        "content": "Conteúdo do Artigo",
        "createdAt": "2024-12-09T13:43:47.000Z",
        "updatedAt": "2024-12-09T13:43:47.000Z"
      }
    ]
    ```

- **POST /articles**

  - Descrição: Cria um novo artigo.
  - Header:
    ```json
    {
      "Authorization": "Bearer seu_token_jwt_aqui"
    }
    ```
  - Corpo da Requisição:
    ```json
    {
      "title": "Título do Artigo",
      "content": "Conteúdo do Artigo"
    }
    ```
  - Resposta:
    ```json
    {
      "message": "Artigo criado",
      "articleId": 1
    }
    ```

- **PUT /articles/:id**

  - Descrição: Edita um artigo existente do usuário autenticado.
  - Header:
    ```json
    {
      "Authorization": "Bearer seu_token_jwt_aqui"
    }
    ```
  - Corpo da Requisição:
    ```json
    {
      "title": "Novo Título",
      "content": "Novo Conteúdo"
    }
    ```
  - Resposta:
    ```json
    {
      "message": "Artigo atualizado"
    }
    ```

- **DELETE /articles/:id**
  - Descrição: Exclui um artigo do usuário autenticado.
  - Header:
    ```json
    {
      "Authorization": "Bearer seu_token_jwt_aqui"
    }
    ```
  - Resposta:
    ```json
    {
      "message": "Artigo deletado com sucesso"
    }
    ```

---

## Autor

Desenvolvido por Diego Franco.
