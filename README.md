# 🔢 Contador React — Dark & Light Mode

Projeto desenvolvido para praticar conceitos fundamentais do **React**, criando um contador com controle de incremento, decremento e reset, além de um sistema de alternância entre os temas **Dark Mode** e **Light Mode**.

## 🎯 Objetivo

O objetivo deste projeto foi colocar em prática conceitos básicos e importantes do React, principalmente:

* ⚛️ `useState`
* 📦 Props
* 🖱️ Eventos de clique (`onClick`)
* 🔄 Atualização de estado
* 🧩 Componentização
* 🎨 Alternância de temas
* 🔁 Renderização dinâmica

## 🚀 Funcionalidades

* ➕ Incrementar o contador
* ➖ Decrementar o contador
* 🔄 Resetar o contador para `0`
* 🌞 Alternar para o tema Light
* 🌙 Alternar para o tema Dark
* 🎨 Interface estilizada com CSS Modules

## 🧠 Conceitos praticados

### useState

Utilizado para controlar o estado do contador e do tema.

```jsx
const [contador, setContador] = useState(0);
```

O `contador` armazena o valor atual e `setContador` permite atualizar esse valor.

### Props

As propriedades são utilizadas para enviar informações do componente `Home` para o componente `Card`.

```jsx
<Card
  btnIncrementar="+"
  btnDecrementar="-"
  btnResetar="Resetar"
/>
```

O componente `Card` recebe essas informações através das props:

```jsx
export default function Card({
  btnIncrementar,
  btnDecrementar,
  btnResetar
}) {
```

### Eventos de clique

Os eventos `onClick` são utilizados para executar funções quando o usuário clica nos botões.

```jsx
<button onClick={incrementar}>
  {btnIncrementar}
</button>
```

### Componentização

O contador foi separado em um componente chamado `Card`, enquanto o componente principal `Home` controla o tema da aplicação.

Essa separação ajuda a manter o código mais organizado e facilita a reutilização dos componentes.

## 🛠️ Tecnologias utilizadas

* React
* JavaScript
* CSS Modules
* HTML
* Git
* GitHub

## 📂 Estrutura do projeto

```text
src/
├── app/
│   ├── page.js
│   └── page.module.css
│
└── Componentes/
    └── Card/
        ├── Card.jsx
        └── Card.module.css
```

## ▶️ Como executar o projeto

Clone este repositório:

```bash
git clone URL_DO_SEU_REPOSITORIO
```

Entre na pasta do projeto:

```bash
cd nome-do-projeto
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run dev
```

Depois, abra no navegador:

```text
http://localhost:3000
```

## 📚 O que aprendi

Durante o desenvolvimento deste projeto, pratiquei como:

* Criar e atualizar estados com `useState`
* Trabalhar com eventos de clique
* Passar informações através de Props
* Criar componentes reutilizáveis
* Controlar valores de um contador
* Criar condições para impedir que o contador fique abaixo de zero
* Alternar estilos utilizando estado
* Organizar componentes e estilos utilizando CSS Modules

## 📸 Preview

> Adicione aqui uma imagem ou GIF do projeto funcionando.

## 👨‍💻 Autor

**Fabio Fernandes Barbosa**

Projeto desenvolvido como parte dos meus estudos de **React e desenvolvimento Front-end**.
