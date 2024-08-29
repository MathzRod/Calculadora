# Calculadora

Uma calculadora simples baseada em JavaScript, HTML e CSS.

## Índice

- [Visão Geral](#visão-geral)
- [Funcionalidades](#funcionalidades)
- [Estrutura de Arquivos](#estrutura-de-arquivos)
- [Estilo](#estilo)
- [Lógica de Funcionamento](#lógica-de-funcionamento)
- [en](#English)
- [es](#Español)

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


### English

# Calculator

A simple calculator built with JavaScript, HTML, and CSS.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [File Structure](#file-structure)
- [Style](#style)
- [Functionality Overview](#functionality-overview)

## Overview

This project implements a basic calculator that performs common arithmetic operations such as addition, subtraction, multiplication, and division, as well as providing additional functionalities like percentage calculation, sign inversion, and a reset button.

## Features

- **Basic Arithmetic Operations:**
  - Addition.
  - Subtraction.
  - Multiplication.
  - Division.
- **Auxiliary Functions:**
  - Percentage calculation.
  - Sign inversion (+/-).
  - Display clearing (C).
- **Responsive Interface:** Adaptable to different screen sizes.

## File Structure

The project's file structure is as follows:

```plaintext
├── index.html      # Main structure of the calculator
├── style.css       # Styles for the calculator
├── calculator.js   # Functionality logic of the calculator
└── README.md       # Project documentation
```

## Style

The `style.css` file defines the visual style of the calculator. Below is a summary of the main styles applied:

- **General**: Resets margins and paddings for consistency.
- **`body`**: Centers the calculator and sets the background color.
- **`.calculator`**: Defines the appearance of the calculator, including size, color, and shadow.
- **`.result`**: Formats the result display.
- **`.buttons`**: Organizes buttons in a grid.
- **Buttons**: Differentiated styles for numbers, operators, and auxiliary functions.
- **Interaction**: Visual effect when a button is pressed.

## Functionality Overview

The `calculator.js` file contains the logic for the calculator's operation. Here is an overview of the code:

### Element Selection

- Selects the element that displays the result and all the calculator buttons.

### Main Variables

- **`currentNumber`**: Stores the currently entered number.
- **`firstOperand`**: Stores the first operand.
- **`operator`**: Stores the selected operator (`+`, `-`, `X`, `/`).
- **`restart`**: Indicates if the next digit should replace the current number.

### Functions

- **`updateResult(originClear = false)`**: Updates the calculator display.
- **`addDigit(digit)`**: Adds digits to the current number.
- **`setOperator(newOperator)`**: Sets the mathematical operator.
- **`calculate()`**: Performs the mathematical calculation.
- **`clearCalculator()`**: Clears the calculator.
- **`setPorcentage()`**: Calculates the percentage of the current number.

### Events

- Adds a click event to each button, which calls the appropriate functions based on the button's text.


