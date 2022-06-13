let buttons = document.querySelectorAll(".btn")
let output = document.querySelector(".calcOutput")
let outputTwo = document.querySelector(".calcOutputTwo")
let clearBtn = document.querySelector(".clearBtn")
let equalsBtn = document.querySelector("#btnEqual")
let total = [];
let oper = '';
let firstNum = '';
let tempNum = '';


let mathFunc = (e) => {
  let val = e.target.textContent;

  if (firstNum != '' && tempNum != '' && oper != '' && val != '=') {
    total.push(operate(oper, parseInt(tempNum), parseInt(firstNum)));
    tempNum = operate(oper, parseInt(tempNum), parseInt(firstNum));
    firstNum = tempNum;
  }

  if (val === "+" || val === "/" || val === "*" || val === "-") {
    oper = e.target.textContent;
    tempNum = firstNum;
    firstNum = '';
  } else if (val === "=") {
    total.push(operate(oper, parseInt(tempNum), parseInt(firstNum)));
    output.textContent = total[total.length - 1];
    return;
  } else if (typeof parseInt(val) === 'number') {
    firstNum += val;
  }
  
  outputTwo.textContent = `${tempNum}  ${oper} ${firstNum}` ;
  output.textContent = total[total.length - 1].toFixed(2);
  // output.textContent = total.reduce((val, val2) => val + val2, 0);
  console.log(total, oper, firstNum, tempNum);
}

let clearAll = () => {
  output.textContent = "";
  outputTwo.textContent = "";
  total = [];
  oper = '';
  firstNum = '';
  tempNum = '';
}

let clearVals = () => {
  total = [];
  oper = '';
  firstNum = '';
  tempNum = '';
}

buttons.forEach(btn => btn.addEventListener('click', mathFunc))
equalsBtn.addEventListener('click', clearVals)
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

