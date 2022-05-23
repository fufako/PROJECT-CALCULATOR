let currNumb = ""
let prevNumb = ""
let operator = ""

const operators = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  x: (a, b) => a * b,
  "÷": (a, b) => a / b,
  "": () => 0,
}

document.querySelectorAll(".number").forEach((number) => {
  number.onclick = (e) => store(e.target.textContent)
})

document.querySelectorAll(".operation").forEach((operation) => {
  operation.onclick = (e) => operatorPressed(e.target.textContent)
})

const dotBtn = document.querySelector(".dot")
const equalsBtn = document.querySelector(".equals")
const currOperation = document.querySelector(".currentOperation")
const lastOperation = document.querySelector(".lastOperation")
const clearBtn = document.querySelector(".clear")
const deleteBtn = document.querySelector(".delete")

clearBtn.onclick = () => clear()
deleteBtn.onclick = () => del()

equalsBtn.onclick = () => operate()

function store(number) {
  currNumb += number
  currOperation.textContent = currNumb
}

function operatorPressed(currOperator) {
  lastOperation.textContent = currNumb + " " + currOperator + " "
  prevNumb = currNumb
  currNumb = ""
  operator = currOperator
}

function operate() {
  // Don't do this V
  // const [a, b] = [prevNumb, currNumb].map(Number)
  const a = Number(prevNumb)
  const b = Number(currNumb)
  if (operator === "") {
    currOperation.textContent = 0
    lastOperation.textContent = ""
  }
  const result = operators[operator](a, b)
  lastOperation.textContent += currNumb
  currOperation.textContent = result
  prevNumb = ""
  currNumb = String(result)
  operator = ""
}

function clear() {
  prevNumb = ""
  currNumb = ""
  operator = ""
  lastOperation.textContent = ""
  currOperation.textContent = "0"
}
function del() {
  currNumb = currNumb.slice(0, -1)
  currOperation.textContent = currNumb
}

function main() {}
