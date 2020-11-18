class Calculator {
  constructor(displayHistory, displayCurrent) {
    this.displayHistory = displayHistory;
    this.displayCurrent = displayCurrent;
    this.currentNumber = "";
    this.previousNumber = "";
    this.result =  "";
    this.operation = undefined;
  }

  clear() {
    if (clearButton.innerText == 'AC') {
      this.currentNumber = "";
      this.previousNumber = "";
      this.result = "";
      this.operation = undefined;
      clearButton.innerText = 'C';
    } else {
      this.currentNumber = this.currentNumber.toString().slice(0,-1);
    }
  }

  switchColor() {
      colorP.classList.toggle('darkColors')
      switchP.classList.toggle('right')
      switchP.classList.toggle('left')
  }

  addNumber(num) {
    if (num === "." && this.currentNumber.includes(".")) return;
    if (this.currentNumber.toString().length >= MAX_LENGTH) return;
    this.currentNumber = this.currentNumber.toString() + num.toString();
  }

  chooseOperator(operator) {
    if (!this.currentNumber) return;
    this.previousNumber = this.currentNumber;
    this.currentNumber = '';
    this.operation = operator;
  }

  switchSign() {
    if (isNaN(this.currentNumber)) return;
    this.currentNumber *= -1;
  }

  calculate() {
    let prev = parseFloat(this.previousNumber);
    let current = parseFloat(this.currentNumber);

    if (isNaN(prev) || isNaN(current)) return;

    switch(this.operation) {
      case "+":
        this.result = prev + current;
        break;
      case "-":
        this.result = prev - current;
        break;
      case "x":
        this.result = prev * current;
        break;
      case "÷":
        this.result = prev / current;
        break;
      case "%":
        this.result = prev % current;
        break;
    }
    this.operation = undefined;
  }

  updateDisplay() {
    this.displayCurrent.innerText = this.currentNumber;
    if (this.operation != undefined) {
      this.displayHistory.innerText = `${this.previousNumber} ${this.operation} ${this.currentNumber}`;
    } else {
      this.displayHistory.innerText = "";
    }
    if (this.result) {
      this.displayCurrent.innerText = this.result;
      this.previousNumber = this.result;
    }
  }
}

const displayHistory = document.getElementById('history');
const displayCurrent = document.getElementById('current');
const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const clearButton = document.querySelector('[data-clear]');
const equalButton = document.querySelector('[data-equal]');
const changeSign = document.querySelector('[data-sign]')
const switchColor = document.getElementById('switch-container')


const calculator = new Calculator(displayHistory,displayCurrent);
const MAX_LENGTH = 10;
let colorP = document.querySelector('.calculator')
let switchP = document.querySelector('#switch-color')

numberButtons.forEach( btn => {
  btn.addEventListener('click', () => {
    calculator.addNumber(btn.innerText)
    calculator.updateDisplay();
  })
})

operatorButtons.forEach( btn => {
  btn.addEventListener('click', () => {
    calculator.chooseOperator(btn.innerText);
    calculator.updateDisplay();
  })
})

equalButton.addEventListener('click', () => {
  calculator.calculate();
  calculator.updateDisplay();
  clearButton.innerText = 'AC'
});

changeSign.addEventListener('click', () => {
  calculator.switchSign();
  calculator.updateDisplay();
})

clearButton.addEventListener('click', () => {
  calculator.clear();
  calculator.updateDisplay();
})

switchColor.addEventListener('click', () => {
    calculator.switchColor();
})
