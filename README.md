# Task List

Este projeto é um Gerenciador de Tarefas (Task List), desenvolvido com React no front-end e Node.js com Express no back-end.

## Estrutura do Projeto

Este projeto é composto por duas partes principais:

1. A pasta `client` contém o front-end da aplicação, desenvolvido com React. Dentro dela você encontrará o arquivo `App.js`, que é o componente principal da aplicação.
2. O arquivo `server.js` na raiz do projeto é onde o back-end da aplicação está implementado. Este arquivo contém todas as rotas da API REST que o front-end utiliza para gerenciar as tarefas.

## Dependências

- Front-end: `React`, `axios`
- Back-end: `express`, `body-parser`, `cors`

## Como Executar o Projeto Localmente

Antes de tudo, certifique-se de ter o Node.js e o npm instalados em sua máquina. Você pode verificar a instalação executando os seguintes comandos:

```bash
node --version
npm --version
```

Cada um desses comandos deve imprimir uma versão. Se eles não imprimirem uma versão ou se os comandos não forem reconhecidos, você precisará instalar o Node.js e o npm.

Depois de confirmar que o Node.js e o npm estão instalados, siga os passos abaixo para executar o projeto localmente.

**Passo 1:** Clone o repositório para a sua máquina local. Você pode fazer isso com o seguinte comando:

```bash
git clone <URL_DO_REPOSITORIO>
```

**Passo 2:** Navegue até a pasta do projeto:

```bash
cd <NOME_DO_DIRETORIO>
```

**Passo 3:** Instale as dependências do projeto. Como o projeto possui um front-end e um back-end, você precisará instalar as dependências para ambos.

Para instalar as dependências do back-end:

```bash
npm install
```

Para instalar as dependências do front-end, primeiro navegue até a pasta `client`, depois instale as dependências:

```bash
cd client
npm install
```

**Passo 4:** Inicie o servidor back-end e a aplicação front-end.

Para iniciar o back-end, volte para a raiz do projeto e execute:

```bash
cd ..
npm start
```

Para iniciar o front-end, em outro terminal, navegue até a pasta `client` e execute:

```bash
cd client
npm start
```

Agora você deverá ser capaz de acessar a aplicação em `http://localhost:3000`.

## Testando as Rotas com Insomnia

Se você preferir, pode testar as rotas da API diretamente. Para isso, você pode usar um cliente HTTP como o Insomnia. No repositório, você encontrará um arquivo chamado `Insomnia_2023-07-06.json` que pode ser importado para o Insomnia para configurar todas as rotas automaticamente.
