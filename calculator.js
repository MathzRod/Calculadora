// Seleciona o elemento que exibirá o resultado da calculadora
const result = document.querySelector(".result");

// Seleciona todos os botões da calculadora
const buttons = document.querySelectorAll(".buttons button");

// Variável para armazenar o número atualmente sendo digitado
let currentNumber = "";

// Variável para armazenar o primeiro operando (número)
let firstOperand = null;

// Variável para armazenar o operador selecionado (+, -, /, X)
let operator = null;

// Variável para indicar se o próximo dígito deve substituir o número atual
let restart = false;

// Função para atualizar o display da calculadora
function updateResult(originClear = false){
    // Se a função for chamada por um clear, exibe 0, senão exibe o número atual
    result.innerText = originClear ? 0 : currentNumber.replace(".", ",");
}

// Função para adicionar dígitos ao número atual
function addDigit(digit){
    // Se o dígito for uma vírgula e já houver uma no número atual, ou se o número estiver vazio, não faz nada
    if(digit === "," && (currentNumber.includes(",") || !currentNumber)) return;

    // Se estiver em modo de reinício (após uma operação), o novo dígito inicia um novo número
    if(restart){
        currentNumber = digit;
        restart = false;
    } else {
        // Caso contrário, o dígito é adicionado ao final do número atual
        currentNumber += digit;
    }

    // Atualiza o display com o novo número
    updateResult();
}

// Função para definir o operador matemático
function setOperator(newOperator){
    // Se houver um número atual, realiza o cálculo com o operador anterior (se houver)
    if(currentNumber){
        calculate();

        // Define o primeiro operando como o número atual (convertido para ponto flutuante)
        firstOperand = parseFloat(currentNumber.replace(",", "."));
        // Reseta o número atual para permitir a entrada do segundo operando
        currentNumber = "";
    }

    // Define o operador como o novo operador selecionado
    operator = newOperator;
}

// Função para realizar o cálculo matemático
function calculate(){
    // Se não houver um operador ou um primeiro operando, não faz nada
    if(operator === null || firstOperand === null) return;

    // Converte o número atual para ponto flutuante e armazena como segundo operando
    let secondOperand = parseFloat(currentNumber.replace(",", "."));
    let resultValue;

    // Determina a operação a ser realizada com base no operador
    switch(operator){
        case "+":
            resultValue = firstOperand + secondOperand;
            break;
        case "-":
            resultValue = firstOperand - secondOperand;
            break;
        case "X":
            resultValue = firstOperand * secondOperand;
            break;
        case "/":
            resultValue = firstOperand / secondOperand;
            break;
        default:
            return; // Se o operador for inválido, sai da função
    }

    // Se o resultado tiver mais de 5 casas decimais, arredonda para 4 casas
    if(resultValue.toString().split(".")[1]?.length > 5){
        currentNumber = parseFloat(resultValue.toFixed(4)).toString();
    } else {
        currentNumber = resultValue.toString();
    }

    // Reseta os valores para preparar a calculadora para uma nova operação
    operator = null;
    firstOperand = null;
    restart = true;

    // Atualiza o display com o resultado
    updateResult();
}

// Função para limpar a calculadora (resetar)
function clearCalculator(){
    currentNumber = "";
    firstOperand = null;
    operator = null;

    // Atualiza o display para 0, indicando que a calculadora foi limpa
    updateResult(true);
}

// Função para calcular a porcentagem
function setPorcentage(){
    // Converte o número atual para porcentagem (divide por 100)
    let result = parseFloat(currentNumber) / 100;

    // Se o operador for adição ou subtração, calcula a porcentagem do primeiro operando
    if(["+", "-"].includes(operator)){
        result = result * (firstOperand || 1);
    }

    // Se o resultado tiver mais de 4 casas decimais, arredonda para 4 casas
    if(result.toString().split(".")[1]?.length > 4){
        result = result.toFixed(4).toString();
    }

    // Define o número atual como o valor da porcentagem calculada
    currentNumber = result.toString();

    // Atualiza o display com o novo valor
    updateResult();
}

// Adiciona um evento de clique a cada botão da calculadora
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        // Captura o texto do botão clicado
        const buttonText = button.innerText;

        // Se o botão clicado for um número ou vírgula, adiciona o dígito
        if (/^[0-9,]+$/.test(buttonText)){
            addDigit(buttonText);
        } 
        // Se for um operador (+, -, X, /), define o operador
        else if(["+", "-", "X", "/"].includes(buttonText)){
            setOperator(buttonText);
        } 
        // Se for o botão de igual (=), realiza o cálculo
        else if(buttonText === "="){
            calculate();
        } 
        // Se for o botão de limpar (C), limpa a calculadora
        else if(buttonText === "C"){
            clearCalculator();
        } 
        // Se for o botão de alternar positivo/negativo (+-), alterna o sinal do número atual
        else if(buttonText === "+-"){
            currentNumber = (parseFloat(currentNumber || firstOperand) * -1).toString();
            updateResult();
        } 
        // Se for o botão de porcentagem (%), calcula a porcentagem
        else if(buttonText === "%"){
            setPorcentage();
        }
    });
});
