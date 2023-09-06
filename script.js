//PAGE ELEMENTS

let operator 
let displayValue //also the "first" number

const topDisplay = document.querySelector('.display-top')
const bottomDisplay = document.querySelector('.display-bottom')
const buttonsNumber = document.querySelectorAll('.number')
const buttonsOperator = document.querySelectorAll('.operator')
const clearButton = document.querySelector('#AC')
const deleteButton = document.querySelector('#DEL')
const equalsButton = document.querySelector('#equals')

//PAGE LOGIC

buttonsNumber.forEach((button) => {
    button.addEventListener('click', (e) => {
        const number = e.target.textContent
        writeOnDisplay(number)
    })
})

buttonsOperator.forEach((button) => {
    button.addEventListener('click', (e) => {
        moveFirstNumberUp(e.target.textContent)
        clearBottomDisplay()
    })
})

equalsButton.addEventListener('click', () => {
    const secondNumber = bottomDisplay.textContent
    const result = operate(operator,displayValue,secondNumber)
    clearBottomDisplay()
    clearTopDisplay()
    writeOnDisplay(result)
    displayValue = result
    console.log(displayValue)
    console.log(secondNumber)
    console.log(result)
})

clearButton.addEventListener('click', () => {clearAll()})
deleteButton.addEventListener('click', () => {deleteNumber()})

//FUNCTIONS

function deleteNumber() {
    const value = bottomDisplay.textContent
    const newValue = value.slice(0,-1)
    bottomDisplay.textContent = newValue
    displayValue = bottomDisplay.textContent
}

function clearAll() {
    clearBottomDisplay()
    clearTopDisplay()
    displayValue = ''
    operator = ''
}

function clearTopDisplay() {
    topDisplay.textContent = ''
}

function clearBottomDisplay() {
    bottomDisplay.textContent = ''
}

function moveFirstNumberUp(oper) {
    topDisplay.textContent = displayValue + " " + oper
    operator = oper
}

function writeOnDisplay(string) {
    bottomDisplay.textContent += string
    displayValue = bottomDisplay.textContent
}

function add(a,b) {
    a = parseFloat(a)
    b = parseFloat(b)
    return (a+b)
}

function substract(a,b) {
    a = parseFloat(a)
    b = parseFloat(b)
    return (a-b)
}

function multiply(a,b) {
    a = parseFloat(a)
    b = parseFloat(b)
    return (a*b)
}

function divide(a,b) {
    a = parseFloat(a)
    b = parseFloat(b)
    return (a / b)
}

function operate(operator, num1, num2) {
    if (operator === '+') {
        return add(num1,num2)
    } else if (operator === '-') {
        return substract(a,b)
    } else if (operator === '*') {
        return multiply(a,b)
    } else if (operator === '/') {
        return divide(a,b)
    }
}