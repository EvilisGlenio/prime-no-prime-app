# Dominando os hooks do React: Um tutorial completo com exemplos de useState, useCallback e useMemo

## Contador Simples em React

Este é um exemplo de uma PoC que demonstra o uso dos hooks useState, useCallback e useMemo em uma aplicação React. O objetivo é criar um contador simples que permite ao usuário incrementar e decrementar um número e exibir se o número atual é primo.

### Componente Counter

O componente Counter é o componente principal desta PoC. Ele contém um estado count que mantém o valor atual do contador.

#### useState

- Utilizado para criar o estado count e a função setCount para atualizar o estado.

#### useCallback

- increment: Função criada usando useCallback para incrementar o contador.
- decrement: Função criada usando useCallback para decrementar o contador.

#### useMemo

- isPrime: Valor calculado usando useMemo para determinar se o número atual é primo.

### Funcionalidades

- Incrementar o contador ao clicar no botão "Increment".
- Decrementar o contador ao clicar no botão "Decrement".
- Exibir se o número atual é Primo.

### Estrutura do Projeto

```bash
├── public
├── src
│ ├── components
│ │ └── PrimeNoPrime
│ │   ├── index.tsx
│ │   └── styles.ts
│ ├── styles
│ │ └── globalStyles.ts
│ ├── App.tsx
│ ├── main.tx
│ └── vite-env.d.ts
├── README.md
└── package.json
```

### Execute o projeto:

```bash
npm run dev
```

Abra seu navegador e acesse [http://localhost:5173](http://localhost:5173) para visualizar o projeto em execução.

### Licença

Este projeto está licenciado sob a [MIT License](https://github.com/EvilisGlenio/prime-no-prime-app/blob/master).
