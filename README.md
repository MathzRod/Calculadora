# Calculadora

Uma calculadora simples baseada em JavaScript, HTML e CSS.

## Índice

- [Visão Geral](#visão-geral)
- [Funcionalidades](#funcionalidades)
- [Estrutura de Arquivos](#estrutura-de-arquivos)
- [Estilo](#estilo)
- [Lógica de Funcionamento](#lógica-de-funcionamento)

## Visão Geral

Este projeto implementa uma calculadora básica que realiza operações aritméticas comuns, como adição, subtração, multiplicação e divisão, além de oferecer funcionalidades auxiliares como cálculo de porcentagem, inversão de sinal e um botão de reset.

## Funcionalidades

- **Operações Aritméticas Básicas:**
  - Adição.
  - Subtração.
  - Multiplicação.
  - Divisão.
- **Funções Auxiliares:**
  - Cálculo de porcentagem.
  - Inversão de sinal (+/-).
  - Limpeza do display (C).
- **Interface Responsiva:** Adaptável a diferentes tamanhos de tela.
- 
## Estrutura de Arquivos

A estrutura de arquivos do projeto é a seguinte:

```plaintext
├── index.html      # Estrutura principal da calculadora
├── style.css       # Estilos da calculadora
├── calculator.js   # Lógica de funcionamento da calculadora
└── README.md       # Documentação do projeto
```

## Estilo

- O arquivo `style.css` define o estilo visual da calculadora. Abaixo está um resumo dos principais estilos aplicados:

- **Geral**: Reseta margens e preenchimentos para consistência.
- **`body`**: Centraliza a calculadora e define a cor do fundo.
- **`.calculator`**: Define a aparência da calculadora, incluindo tamanho, cor e sombra.
- **`.result`**: Formata o display de resultado.
- **`.buttons`**: Organiza os botões em uma grade.
- **Botões**: Estilos diferenciados para números, operadores e funções auxiliares.
- **Interação**: Efeito visual quando um botão é pressionado.

## Lógica de Funcionamento

O arquivo `calculator.js` contém a lógica para a operação da calculadora. Aqui está uma visão geral do código:

### Seleção de Elementos

- **Seleciona o elemento que exibe o resultado** e todos os botões da calculadora.

### Variáveis Principais

- **`currentNumber`**: Armazena o número atualmente sendo digitado.
- **`firstOperand`**: Armazena o primeiro operando.
- **`operator`**: Armazena o operador selecionado (`+`, `-`, `X`, `/`).
- **`restart`**: Indica se o próximo dígito deve substituir o número atual.

### Funções

- **`updateResult(originClear = false)`**: Atualiza o display da calculadora.
- **`addDigit(digit)`**: Adiciona dígitos ao número atual.
- **`setOperator(newOperator)`**: Define o operador matemático.
- **`calculate()`**: Realiza o cálculo matemático.
- **`clearCalculator()`**: Limpa a calculadora.
- **`setPorcentage()`**: Calcula a porcentagem do número atual.

### Eventos

- **Adiciona um evento de clique a cada botão**, que chama as funções apropriadas com base no texto do botão.
