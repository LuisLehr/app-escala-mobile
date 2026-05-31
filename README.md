# App Escala Mobile

Aplicação mobile desenvolvida durante o quarto semestre do curso de Tecnologia em Análise e Desenvolvimento de Sistemas da Universidade do Vale do Rio dos Sinos (Unisinos), na disciplina de Programação para Dispositivos Móveis.

O projeto foi criado para auxiliar uma escola no controle de escalas de professores durante a aplicação de provas. A aplicação permite consultar horários, cadastrar provas e atribuir um professor disponível de acordo com o dia e o período selecionados.

## ✅ Principais funcionalidades

* Tela de login para acesso ao aplicativo.
* Tela inicial com navegação para os principais recursos.
* Cadastro de provas por turma, dia da semana e período.
* Busca de um professor disponível para aplicar uma prova.
* Consulta da escala semanal de cada professor.
* Visualização de uma grade semanal com turmas, professores e períodos.
* Menu lateral para navegação entre as telas.
* Página com informações sobre a instituição.

## 🚀 Começando

Estas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

### Pré-requisitos

Antes de iniciar, instale:

* [Node.js](https://nodejs.org/) - Ambiente necessário para executar o projeto.
* [Ionic CLI](https://ionicframework.com/docs/cli) - Ferramenta de linha de comando do Ionic.
* [Android Studio](https://developer.android.com/studio) - Necessário para executar a versão Android.

Instale o Ionic CLI globalmente:

```bash
npm install -g @ionic/cli
```

## 📝 Como executar o software

Clone o repositório:

```bash
git clone https://github.com/LuisLehr/app-escala-mobile.git
```

Acesse a pasta do projeto e instale as dependências:

```bash
cd app-escala-mobile
npm install
```

Execute a API local e a aplicação Ionic:

```bash
npm start
```

O comando inicia:

* A API local em `http://localhost:3000`.
* A aplicação Ionic em `http://localhost:8100`.

## 📱 Como executar no Android

Compile a aplicação e sincronize o projeto Android:

```bash
ionic build
npx cap sync android
```

Abra o projeto no Android Studio:

```bash
npx cap open android
```

No Android Studio, selecione um emulador ou dispositivo conectado e execute o aplicativo.

## 🔌 API e banco de dados

O backend está localizado em `src/backend/server.js` e foi desenvolvido com Node.js e Express.

A API disponibiliza os seguintes endpoints:

| Método | Endpoint | Descrição |
| --- | --- | --- |
| `GET` | `/professores` | Retorna a lista de professores cadastrados. |
| `GET` | `/escala/:professor_id` | Retorna a escala de um professor específico. |
| `POST` | `/atribuir-professor` | Localiza um professor disponível para o dia e os horários informados. |

O backend utiliza MySQL para consultar professores e horários. Por segurança, os dados de acesso ao banco devem ser configurados por meio de variáveis de ambiente e não devem ser enviados ao GitHub.

## 📁 Estrutura do projeto

```text
app-escala-mobile
├── android
│   └── app
├── src
│   ├── app
│   │   ├── components
│   │   ├── grade-semanal
│   │   ├── horario-prova
│   │   ├── home
│   │   ├── login
│   │   ├── models
│   │   ├── professor-escala
│   │   ├── services
│   │   └── sobre
│   ├── assets
│   ├── backend
│   │   └── server.js
│   ├── environments
│   └── theme
├── capacitor.config.ts
├── ionic.config.json
├── package.json
└── README.md
```

## 🔨 Como foi feito

O projeto utiliza Ionic com Angular para a interface mobile, Capacitor para integração com Android e uma API local desenvolvida com Node.js e Express. O backend consulta uma base MySQL para localizar professores e suas disponibilidades.

***1*** - Instale o Node.js e o Ionic CLI. <br>
***2*** - Clone ou baixe este repositório. <br>
***3*** - Execute o comando ```npm install``` para instalar as dependências. <br>
***4*** - Configure o acesso ao banco de dados utilizado pela API. <br>
***5*** - Execute o comando ```npm start``` para iniciar a API e a aplicação. <br>
***6*** - Para executar no Android, utilize ```ionic build```, ```npx cap sync android``` e ```npx cap open android```. <br>

## 🛠 Construído com

* [Ionic](https://ionicframework.com/) - Framework utilizado para a interface da aplicação.
* [Angular](https://angular.dev/) - Framework utilizado na construção do frontend.
* [TypeScript](https://www.typescriptlang.org/) - Linguagem utilizada no frontend.
* [Capacitor](https://capacitorjs.com/) - Ferramenta utilizada para integração com Android.
* [Node.js](https://nodejs.org/) - Ambiente utilizado para executar o backend.
* [Express](https://expressjs.com/) - Framework utilizado para criar a API.
* [MySQL](https://www.mysql.com/) - Banco de dados utilizado para armazenar professores e horários.

## ✒ Autores

* **Luis Henrique Lehr** - *Desenvolvimento*
* **Bernardo Bergamo Stange** - *Desenvolvimento*
* **Laíssa Soares** - *Desenvolvimento*
