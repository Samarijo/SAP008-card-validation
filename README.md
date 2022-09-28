# Card Validation

## Índice

* [1. Introdução](#1-Introdução)
* [2. Resumo do projeto](#2-resumo-do-projeto)
* [4. Pesquisa UX](#4-Pesquisa-UX)


***

## 1. Introdução

O [algoritmo de Luhn](https://en.wikipedia.org/wiki/Luhn_algorithm), também
chamado de módulo 10, é um método de soma de verificação, usado para validar
números de identificação, como o IMEI de telefones celulares, cartões de crédito
etc.

Esse algoritmo é simples. Obtemos o inverso do número a ser verificado (que
contém apenas dígitos [0-9]); todos os números que ocupam uma posição par devem
ser multiplicados por dois; se esse número for maior ou igual a 10, devemos
adicionar os dígitos do resultado; o número a verificar será válido se a soma de
seus dígitos finais for um múltiplo de 10.

![gráfico do algoritmo de
Luhn](https://www.101computing.net/wp/wp-content/uploads/Luhn-Algorithm.png)

## 2. Resumo do projeto

Card Validation é um projeto que permite o usuário verificar se um número de cartão é válido ou não. Pra que o usuário consiga fazer essa verificação, foi utilizado a lógica do algoritmo de LUHN, apresentado na introdução.

![](imagem_final_do_projeto.png)

## 4. Pesquisa UX

* 
* O projeto será entregue subindo o seu código no GitHub (commit/push) e o
  deploy será feito no GitHub Pages. Se não sabe o que é o GitHub, não se
  preocupe, você aprendera durante o projeto.
* Tempo para completar: tempo referência 2 semanas.

## 5. Critérios mínimos de aceitação do projeto

Use apenas caracteres numéricos (dígitos) no cartão para validar [0-9].

### Definição do produto

No `README.md`, conte-nos como você pensou sobre os usuários e qual foi seu
processo para definir o produto final a nível da experiência e da interface.

* Quem são os principais usuários do produto.
* Quais os objetivos destes usuários em relação a seu produto.
* Como você considera que o produto que está criando resolverá os problemas dos
  usuários.

### Interface do usuário (UI)

A interface deve permitir ao usuário:

* Inserir o número que desejamos validar.
* Constatar se o resultado é válido ou não.
* Ocultar todos os dígitos do número do cartão, excetuando os últimos 4
  caracteres.
* Não deve poder inserir um campo vazio.

### UX (Design da experiência do usuário)

Antes de começar a codificar, você deve entender o problema que deseja resolver
e como o aplicativo o resolve.

* Trabalhe seu primeiro protótipo com papel e lápis (preto e branco).
* Em seguida, valide esta solução com uma companheira (peça feedback).
* Use o aprendizado no momento de validar seu primeiro protótipo e desenvolva um
  novo protótipo empregando alguma ferramenta para design de protótipos
  ([Balsamiq](https://balsamiq.com/), [Figma](https://www.figma.com/),
  [Apresentações Google](https://www.google.com/intl/pt-br/slides/about/) etc.)
  Esses pontos serão apresentados no `README.md`.

### Scripts / Arquivos

#### Geral

##### `README.md`

Ele deve conter o seguinte:

* Um título com o nome do seu projeto.
* Um resumo de 1 ou 2 linhas sobre o seu projeto.
* A imagem final do seu projeto.
* Pesquisa UX:
  1. Explicar quem irá usá-lo e os objetivos quanto ao produto.
  2. Explicar como o produto resolve os problemas/necessidades desses usuários.
  3. Em seguida, você colocará a foto do seu primeiro protótipo no papel.
  4. Adicionar um resumo do feedback recebido indicando as melhorias a serem
     feitas.
  5. Imagem do protótipo final.

#### Interface

Você precisará definir exatamente o protótipo final que você criou na ferramenta
de design de protótipos que você escolheu usando HTML e CSS. Nesse momento, você
escolherá as cores, o tipo de fonte etc. que irá usar.

Abaixo, descrevemos os arquivos que você usará:

##### `src/index.html`

Este arquivo contém o conteúdo que será exibido ao usuário (esqueleto HTML).
Você encontrará três marcadores iniciais que, se você quiser, poderá excluir e
começar do zero:

* `<header>`: cabeçalho do seu projeto.
* `<main>`: conteúdo principal do seu projeto.
* `<footer>`: rodapé do seu projeto.

##### `src/style.css`

Este arquivo deve conter as regras de estilo. Queremos que você escreva suas
próprias regras. Por isso, o uso de estruturas CSS (Bootstrap, materialize etc.)
NÃO é permitido.

#### Funcionalidades e testes de unidade (JavaScript)

* A lógica do projeto deve ser totalmente implementada em JavaScript.
* NÃO é permitido usar bibliotecas ou frameworks neste projeto, apenas
  JavaScript puro, também conhecido como JavaScript Vanilla.

Você terá 2 arquivos JavaScript que separam responsabilidades, eis o que você
fará em cada arquivo:

##### `src/validator.js`

Aqui você escreverá as funções necessárias para que o usuário possa verificar o
cartão de crédito e ocultar os dígitos do número do cartão. Esta função deve ser
pura e independente do DOM.

Para isso, você deve implementar o **validador `de objeto`**, que já está
_exportado_ no _boilerplate_. Este objeto (`validador`) contém dois métodos
(`isValid` e `maskify`):

* **`validator.isValid(creditCardNumber)`**: `creditCardNumber` é um `string`
  com o número do cartão a ser verificado. Esta função deve retornar um
  `boolean`, dependendo de sua validade, de acordo com o [algoritmo de
  Luhn](https://en.wikipedia.org/wiki/Luhn_algorithm).

* **`validator.maskify(creditCardNumber)`**: `creditCardNumber` é um `string`
  com o número do cartão e esta função deve retornar um `string` onde todos,
  exceto os últimos quatro caracteres, são substituídos por um número (`#`) ou
  🐱. Essa função deve sempre manter os quatro últimos caracteres intactos,
  mesmo quando o `string` for mais curto.

    Exemplo de uso:

    ```js
    maskify('4556364607935616') === '############5616'
    maskify(     '64607935616') ===      '#######5616'
    maskify(               '1') ===                '1'
    maskify(               '')  ===                ''
    ```

##### `src/index.js

Aqui, você escreverá todo o código relacionado à interação do DOM (selecionar,
atualizar e manipular elementos do DOM e eventos). Ou seja, nesse arquivo, você
precisará ativar as funções `isValid` e `maskify` conforme seja necessário para
atualizar o resultado na tela (UI).

##### `test/validator.spec.js`

Nesse arquivo, você deverá concluir os testes de unidade das funções
`validator.isValid(creditCardNumber)` e `validator.maskify(creditCardNumber)`
implementadas em `validator.js` usando [Jest](https://jestjs.io/pt-BR/). Seus
testes de unidade devem proporcionar 70% em _coverage_ (cobertura), _statements_
(instruções), _functions_ (funções) e _lines_ (linhas); e um mínimo de 50% de
_branches_ (ramificações).

***

#### Deploy

Disponibilizar os projetos e colocá-los "no ar" vai ser parte cotidiana do
ciclo de desenvolvimento em produtos de tecnologia.

Para este projeto, utilizaremos o Github Pages para essa finalidade.
O comando `npm run deploy` pode te auxiliar nessa tarefa e você pode também
consultar a [documentação oficial](https://docs.github.com/pt/pages).

## 6. Guias, dicas e leituras complementares

### Primeiros passos

1. Antes de tudo, verifique se você possui um :pencil: editor de texto em boa
   condição, algo como [Atom](https://atom.io/) ou
   [Code](https://code.visualstudio.com/).
2. Para executar os comandos abaixo, você precisará de um :shell:
   [Shell UNIX](https://curriculum.laboratoria.la/pt/topics/shell), que
   é um pequeno programa que interpreta linhas de comando (command-line
   interpreter), além de ter o
   [git](https://curriculum.laboratoria.la/pt/topics/scm/01-git)
   instalado. Se você usa um sistema operacional do tipo UNIX, como GNU/Linux ou
   MacOS, já possui um _shell_ (terminal) instalado por padrão (e provavelmente
   `git`) também. Se você usa o Windows, pode utilizar a versão completa do
   [Cmder](https://cmder.net/) que inclui [Git bash](https://git-scm.com/download/win)
   e, se tiver o Windows 10 ou superior, pode usar o
   [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/install-win10).
3. :arrow_down: [Clone](https://help.github.com/articles/cloning-a-repository/)
   sua _fork_ no seu computador (cópia local).
4. 📦 Instale as dependências do projeto com o comando `npm install`. Isso
   pressupõe que você instalou [Node.js](https://nodejs.org/) (que inclui
   [npm](https://docs.npmjs.com/)).
5. Se tudo correu bem, você poderá executar :traffic_light: testes de unidade
   (unit tests) com o comando `npm test`.
6. Para visualizar a interface do seu programa no navegador, use o comando `npm
   start` para iniciar o servidor da web e acesse `http://localhost:5000` no seu
   navegador.
7. Comece a programar! :rocket:

### Recursos e tópicos relacionados

Aqui está um vídeo de Michelle que mostra o algoritmo de Luhn (o vídeo está em
espanhol, mas pode ser útil) e mais algumas coisas que você deve saber para
realizar este projeto. Ouça com atenção e siga os conselhos dela! :)

[![dicas de cartão de
crédito](https://img.youtube.com/vi/f0zL6Ot9y_w/0.jpg)](https://www.youtube.com/watch?v=f0zL6Ot9y_w)

[Link](https://www.youtube.com/watch?v=f0zL6Ot9y_w)

Design da experiência do usuário (User Experience Design):

* Concepção
* Prototipagem (desenho)
* Testes e iteração

Desenvolvimento de front-end:

* Valores
* Tipos
* Variáveis
* Controle de fluxo
* Testes unitários
* [Documentação do NPM](https://docs.npmjs.com/)
