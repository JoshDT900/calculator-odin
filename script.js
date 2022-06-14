let buttons = document.querySelectorAll(".btn")
let output = document.querySelector(".calcOutput")
let outputTwo = document.querySelector(".calcOutputTwo")
let clearBtn = document.querySelector(".clearBtn")
let addBtn = document.querySelector("#btnAdd")
let equalsBtn = document.querySelector("#btnEqual")
let subBtn = document.querySelector("#btnSub")
let multBtn = document.querySelector("#btnMulti")
let divBtn = document.querySelector("#btnDiv")
let total = 0;
let oper = '';
let numArr = [];
let tempNum = '';

let mathFunc = (e) => {
  if ()


  let val = e.target.textContent;  

  if (val === "+" || val === "/" || val === "*" || val === "-") {  
    oper = val;
    numArr.push(tempNum);
    tempNum = '';
    console.log(`The oper is: ${oper}`);   
  } else if (val === "=") {
    numArr.push(tempNum);
    total = operate(oper, numArr);
    total = total.toFixed(2);
    console.log(`The total is: ${total}`);
  } else if (typeof parseInt(val) === 'number' || val === ".") {
    tempNum += val;
  }
  
  console.log(`The oper is: ${oper}`);
  console.log(`The total is: ${total}`);
  console.log(`The numArr is: ${numArr}`);
  console.log(`The tempNum is: ${tempNum}`);
}

let clearAll = () => {
  output.textContent = "";
  outputTwo.textContent = "";
  total = [];
  numArr = [];
  oper = '';
  tempNum = '';
}

let clearVals = () => {
  total = [];
  oper = '';
  numArr = [];
  tempNum = '';
}

buttons.forEach(btn => btn.addEventListener('click', mathFunc))
equalsBtn.addEventListener('click', clearVals)
clearBtn.addEventListener('click', clearAll)

let addFunc = (arr) => {
  return arr.reduce((prevVal, currVal) => parseFloat(prevVal) + parseFloat(currVal))
}

let subtrFunc = (arr) => {
  return arr.reduce((prevVal, currVal) => parseFloat(prevVal) - parseFloat(currVal))
}

let multiFunc = (arr) => {
  return arr.reduce((prevVal, currVal) => parseFloat(prevVal) * parseFloat(currVal))
}

let diviFunc = (arr) => {
  return arr.reduce((prevVal, currVal) => parseFloat(prevVal) / parseFloat(currVal))
}

let operate = (oper, arr) => {
  let opVal = oper;

  if (opVal === "+") {
    return addFunc(arr);
  } else if (opVal === "*") {
    return multiFunc(arr);
  } else if (opVal === "-") {
    return subtrFunc(arr);
  } else if (opVal === "/") {
    return diviFunc(arr);
  }
}