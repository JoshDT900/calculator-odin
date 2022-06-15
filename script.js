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

let keyObj = {
  96: 0, 97: 1, 98: 2, 99: 3, 100: 4, 101: 5, 102: 6, 103: 7, 104: 8, 105: 9, 110: '.', 111: '/', 106: '*', 109: '-', 107: '+', 13: '=',
  48: 0, 49: 1, 50: 2, 51: 3, 52: 4, 53: 5, 54: 6, 55: 7, 56: 8, 57: 9, 190: '.', 191: '/', 189: '-', 107: '+', 187: '='
}

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

// Handles what to do when there are more than 2 numbers to calculate
let symbFunc = (e) => {
  let operHolder = e.target.textContent;

  oper.push(operHolder);
  numArr.push(tempNum);

  tempNum = '';

  total = operate(oper[0], numArr);

  numArr = [];
  numArr.push(total);

  output.textContent = total;
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
}

//Handles keyboard functionality
let mathFuncPress = (e) => {
  let val = keyObj[e.keyCode];

  if (e.keyCode === 111 || e.keyCode === 106 || e.keyCode === 109 || e.keyCode === 107 || e.keyCode === 189 || e.keyCode === 191) {
    symbFuncPress(val)
  }

  console.log(e.keyCode);

  if (parseInt(val) >= 0 || parseInt(val) <= 0 || val === '.') {
    tempNum += val;
  } else if (val === "=") {
    numArr.push(tempNum);
    total = operate(oper[0], numArr);
    total = total.toFixed(2);
    output.textContent = total;
    return clearVals()
  }

  if (oper.length >= 2) {
    oper.shift();
  }
  
  if (numArr[0] != undefined) {
    outputTwo.textContent = `${numArr[0]} ${oper[0]} ${tempNum}`;
  } else {
    outputTwo.textContent = `${tempNum}`
  }
}

let symbFuncPress = (e) => {
  let operHolder = e;

  oper.push(operHolder);
  numArr.push(tempNum);

  tempNum = '';

  total = operate(oper[0], numArr);

  numArr = [];
  numArr.push(total);

  output.textContent = total;
}

let clearAll = () => {
  output.textContent = "";
  outputTwo.textContent = "";
  total = [];
  numArr = [];
  oper = [];
  tempNum = '';
}

// Function to clear after hitting equal
let clearVals = () => {
  total = [];
  oper = [];
  numArr = [];
  tempNum = '';
}

document.addEventListener('keydown', mathFuncPress)
buttons.forEach(btn => btn.addEventListener('click', mathFunc));
addBtn.addEventListener('click', symbFunc);
subBtn.addEventListener('click', symbFunc);
divBtn.addEventListener('click', symbFunc);
multBtn.addEventListener('click', symbFunc);
equalsBtn.addEventListener('click', clearVals);
clearBtn.addEventListener('click', clearAll);

