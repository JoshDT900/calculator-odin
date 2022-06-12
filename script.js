let buttons = document.querySelectorAll(".btn")
let output = document.querySelector(".calcOutput")
let outputTwo = document.querySelector(".calcOutputTwo")
let clearBtn = document.querySelector(".clearBtn")
let equalsBtn = document.querySelector("#btnEqual")
let total = 0;
let operArr = [];
let firstNum = [];


let mathFunc = (e) => {
  let val = e.target.textContent;

  if ()

  if (val === "+" || val === "/" || val === "*" || val === "-") {
    operArr[0] = e.target.textContent;
    total = operate(operArr[0], total, parseInt(firstNum.join("")));
    firstNum = [];
  } else if (val === "=") {
    total = operate(operArr[0], total, parseInt(firstNum.join("")));
  } else if (typeof parseInt(val) === 'number') {
    firstNum.push(val);
  }

  console.log(total, operArr, firstNum);
}

let clearAll = () => {
  output.textContent = "";
  outputTwo.textContent = "";
  total = 0;
  operArr = [];
  firstNum = [];
}

buttons.forEach(btn => btn.addEventListener('click', mathFunc))
equalsBtn.addEventListener('click', clearAll)
clearBtn.addEventListener('click', clearAll)



// Math Functions

let addFunc = (a, b) => {
  let val1 = a;
  let val2 = b;

  return val1 + val2
}

let subtrFunc = (a, b) => {
  let val1 = a;
  let val2 = b;

  return val1 - val2;
}

let multiFunc = (a, b) => {
  let val1 = a;
  let val2 = b;

  return val1 * val2;
}

let diviFunc = (a, b) => {
  let val1 = a;
  let val2 = b;

  return val1 / val2;
}

let operate = (oper, a, b) => {
  let opVal = oper;

  if (opVal === "+") {
    return addFunc(a, b);
  } else if (opVal === "*") {
    return multiFunc(a, b);
  } else if (opVal === "-") {
    return subtrFunc(a, b);
  } else if (opVal === "/") {
    return diviFunc(a, b);
  }
}

