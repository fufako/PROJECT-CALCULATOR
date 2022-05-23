let currNumb = ""
let prevNumb = ""

const oneBtn = document.querySelector(".one")
const twoBtn = document.querySelector(".two")
const threeBtn = document.querySelector(".three")
const fourBtn = document.querySelector(".four")
const fiveBtn = document.querySelector(".five")
const sixBtn = document.querySelector(".six")
const sevenBtn = document.querySelector(".seven")
const eightBtn = document.querySelector(".eight")
const nineBtn = document.querySelector(".nine")
const zeroBtn = document.querySelector(".zero")

const multiplyBtn = document.querySelector(".multiply")
const divideBtn = document.querySelector(".divide")
const minusBtn = document.querySelector(".minus")
const plusBtn = document.querySelector(".plus")
const dotBtn = document.querySelector(".dot")
const equalsBtn = document.querySelector(".equals")

oneBtn.onclick = (e) => store(e.target.id)
twoBtn.onclick = (e) => store(e.target.id)
threeBtn.onclick = (e) => store(e.target.id)
fourBtn.onclick = (e) => store(e.target.id)
fiveBtn.onclick = (e) => store(e.target.id)
sixBtn.onclick = (e) => store(e.target.id)
sevenBtn.onclick = (e) => store(e.target.id)
eightBtn.onclick = (e) => store(e.target.id)
nineBtn.onclick = (e) => store(e.target.id)
zeroBtn.onclick = (e) => store(e.target.id)

plusBtn.onclick = (e) => operatorPressed()
minusBtn
equalsBtn.onclick = () => operate()
function store(number) {
  currNumb += number
}

function operatorPressed() {
  prevNumb = currNumb
  currNumb = ""
}
function operate() {
  console.log(parseInt(prevNumb) + parseInt(currNumb))
  prevNumb = ""
  currNumb = ""
}

function clear() {}

function main() {}
