let buttons = document.querySelectorAll(".btn")
let output = document.querySelector(".calcOutput")
let outputTwo = document.querySelector(".calcOutputTwo")
let clearBtn = document.querySelector(".clearBtn")
let equalsBtn = document.querySelector("#btnEqual")
let total = [];
let oper = '';
let numArr = [];
let tempNum = '';
// let total = [];
// let oper = '';
// let firstNum = '';
// let tempNum = '';


let mathFunc = (e) => {
  let val = e.target.textContent;

  if (val === ".") {
    return "ERR";
  }

  // if (firstNum != '' && tempNum != '' && oper != '' && val != '=') {
  //   total.push(operate(oper, parseInt(tempNum), parseInt(firstNum)));
  //   tempNum = operate(oper, parseInt(tempNum), parseInt(firstNum));
  //   firstNum = tempNum;
  // }

  if (val === "+" || val === "/" || val === "*" || val === "-") {
      oper = e.target.textContent;
      numArr.push(tempNum);
      tempNum = '';
    } else if (val === "=") {
      numArr.push(tempNum);
      total = operate(oper, numArr);
    } else if (typeof parseInt(val) === 'number') {
      tempNum += val;
    }



  // if (val === "+" || val === "/" || val === "*" || val === "-") {
  //   oper = e.target.textContent;
  //   tempNum = firstNum;
  //   firstNum = '';
  // } else if (val === "=") {
  //   total.push(operate(oper, parseInt(tempNum), parseInt(firstNum)));
  //   output.textContent = total[total.length - 1];
  //   return;
  // } else if (typeof parseInt(val) === 'number') {
  //   firstNum += val;
  // }
  
  // outputTwo.textContent = `${tempNum}  ${oper} ${firstNum}` ;
  // output.textContent = total[total.length - 1].toFixed(2);
  // output.textContent = total.reduce((val, val2) => val + val2, 0);
  console.log(`The oper is: ${oper}`);
  console.log(`The total is: ${total}`);
  console.log(`The numArr is: ${numArr}`);
  console.log(`The tempNum is: ${tempNum}`);
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
  numArr = [];
  tempNum = '';
}

buttons.forEach(btn => btn.addEventListener('click', mathFunc))
equalsBtn.addEventListener('click', clearVals)
clearBtn.addEventListener('click', clearAll)



// Math Functions

let addFunc = (arr) => {
  return arr.reduce((prevVal, currVal) => parseInt(prevVal) + parseInt(currVal), 0)
}

let subtrFunc = (arr) => {
  return arr.reduce((prevVal, currVal) => parseInt(currVal) - parseInt(prevVal), 0)
}

let multiFunc = (arr) => {
  return arr.reduce((prevVal, currVal) => parseInt(prevVal) * parseInt(currVal), 1)
}

let diviFunc = (arr) => {
  return arr.reduce((prevVal, currVal) => parseInt(prevVal) / parseInt(currVal), 100)
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

