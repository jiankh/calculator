//PAGE ELEMENTS

let operator 
let displayValue
let firstNumber
let secondNumber

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
        firstNumber = bottomDisplay.textContent
        moveFirstNumberUp(e.target.textContent)
        clearBottomDisplay()
    })
})

equalsButton.addEventListener('click', () => {
    secondNumber = bottomDisplay.textContent

    if (!secondNumber) {
        return //return early if there is no second number to use operate with.
    }

    console.log(secondNumber)
    const result = operate(operator,firstNumber,secondNumber)
    clearBottomDisplay()
    clearTopDisplay()
    writeOnDisplay(result)
    displayValue = result
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
    topDisplay.textContent = bottomDisplay.textContent + " " + oper
    operator = oper
}

function writeOnDisplay(string) {
    bottomDisplay.textContent += string
}

function add(a,b) {
    return (a+b)
}

function substract(a,b) {
    return (a-b)
}

function multiply(a,b) {
    return (a*b)
}

function divide(a,b) {
    return (a / b)
}

function operate(operator, num1, num2) {
    num1 = parseFloat(num1)
    num2 = parseFloat(num2)

    if (operator === '+') {
        return add(num1,num2)
    } else if (operator === '-') {
        return substract(num1,num2)
    } else if (operator === '*') {
        return multiply(num1,num2)
    } else if (operator === '/') {
        if (num2 === 0) {
            return "Error: Division by zero!"
        } else {
        return divide(num1,num2)
    }}
}