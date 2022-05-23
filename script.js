let currNumb = ""
let prevNumb = ""
let operator = ""

const numbers = document.querySelectorAll(".number")
for (number of numbers) {
  number.onclick = (e) => store(e.target.textContent)
}
const operations = document.querySelectorAll(".operation")
for (operation of operations) {
  operation.onclick = (e) => operatorPressed(e.target.id)
}

const dotBtn = document.querySelector(".dot")
const equalsBtn = document.querySelector(".equals")

equalsBtn.onclick = () => operate()

function store(number) {
  currNumb += number
}

function operatorPressed(action) {
  prevNumb = currNumb
  currNumb = ""
  operator = action
}

function operate() {
  prevNumb = ""
  currNumb = ""
  operator = ""
}
function add(a, b) {
  return a + b
}

function subtract(a, b) {
  return a - b
}

function multiply(a, b) {
  return a * b
}

function divide(a, b) {
  return a / b
}

function clear() {}

function main() {}
