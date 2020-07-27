// class Calculator {
//     constructor(previousText, currentText) {
//         this.currentText = currentText;
//         this.previousText = previousText;
//         this.clear();
//     }
//     clear() {
//         this.previous = '';
//         this.current = '';
//         this.operation = undefined;
//     }
//     delete() {

//     }

//     appendNumber(number) {
//         this.currentText = number

//     }
//     chooseOperation(operation) {

//     }
//     compute() {

//     }
//     updateNumbers() {
//         this.currentText

//     }


// }

class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
    }
    clear() {
        this.currentoperand = '';
        this.previousoperand = '';
        this.operation = undefined;

    }
    delete() {

    }
    appendNumber(number) {
        this.currentOperand = number;
    }
    chooseOperation(operation) {

    }
    compute() {

    }
    updateDisplay() {
        this.currentOperandTextElement.innerHTML = this.currentOperand;
        // document.querySelector("[data-current]").innerText = n;
    }
}



const numberButtons = document.querySelectorAll("[data-number]");
const operationButton = document.querySelectorAll("[data-operation]");
const equalButton = document.querySelector("[data-equal]");
const deleteButton = document.querySelector("[data-delete]");
const clearButton = document.querySelector("[data-clear]");
const previousOperandTextElement = document.querySelector("[data-previous]");
const currentOperandTextElement = document.querySelector("[data-current]");


const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})



// numberButton.forEach(button => {
//     button.addEventListener("click", () => {
//         calculator.appendNumber(button.innerText)
//         calculator.updateNumbers()
//     })
// })