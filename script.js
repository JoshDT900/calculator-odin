let buttons = document.querySelectorAll(".btn")
let output = document.querySelector(".calcOutput")
let outputTwo = document.querySelector(".calcOutputTwo")
let clearBtn = document.querySelector(".clearBtn")
let equalsBtn = document.querySelector("#btnEqual")
let addBtn = document.querySelector("#btnAdd")
let subBtn = document.querySelector("#btnSub")
let multBtn = document.querySelector("#btnMulti")
let divBtn = document.querySelector("#btnDiv")
let total = 0;
let oper = [];
let numArr = [];
let tempNum = '';

let addFunc = (arr) => {
  return arr.reduce((prevVal, currVal) => parseFloat(prevVal) + parseFloat(currVal));
}

let subtrFunc = (arr) => {
  return arr.reduce((prevVal, currVal) => parseFloat(prevVal) - parseFloat(currVal));
}

let multiFunc = (arr) => {
  return arr.reduce((prevVal, currVal) => parseFloat(prevVal) * parseFloat(currVal));
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

let symbFunc = (e) => {
  let operHolder = e.target.textContent;
  oper.push(operHolder);
  numArr.push(tempNum);
  tempNum = '';  
  total = operate(oper[0], numArr);
  numArr = [];
  numArr.push(total);

  output.textContent = total;
  console.log(`The opertor is: ${oper}`);
  console.log(`The total is: ${total}`);
  console.log(`The number array is: ${numArr}`);
  console.log(`The temp number is: ${tempNum}`);
}

let mathFunc = (e) => {
  let val = e.target.textContent;

  if (parseInt(val) >= 0 || parseInt(val) <= 0 || val === '.') {
    tempNum += val;
  } else if (val === "=") {
    numArr.push(tempNum);
    total = operate(oper[0], numArr);
    total = total.toFixed(2);
    output.textContent = total;
  }

  if (oper.length >= 2) {
    oper.shift();
  }
  
  if (numArr[0] != undefined) {
    outputTwo.textContent = `${numArr[0]} ${oper[0]} ${tempNum}`;
  } else {
    outputTwo.textContent = `${tempNum}`
  }
  
  console.log(`The opertor is: ${oper}`);
  console.log(`The total is: ${total}`);
  console.log(`The number array is: ${numArr}`);
  console.log(`The temp number is: ${tempNum}`);
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

buttons.forEach(btn => btn.addEventListener('click', mathFunc));
buttons.forEach(btn => btn.addEventListener(''))
addBtn.addEventListener('click', symbFunc);
subBtn.addEventListener('click', symbFunc);
divBtn.addEventListener('click', symbFunc);
multBtn.addEventListener('click', symbFunc);
equalsBtn.addEventListener('click', clearVals);
clearBtn.addEventListener('click', clearAll);

