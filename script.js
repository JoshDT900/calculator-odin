let buttons = document.querySelectorAll(".btn")
let output = document.querySelector(".calcOutput")
let outputTwo = document.querySelector(".calcOutputTwo")
let firstVal = '';
let calcArr = [];

let logFunc = (e) => {

  if (e.target.textContent === "+" || e.target.textContent === "-" || e.target.textContent === "*" || e.target.textContent === "/") {
      calcArr.push(firstVal)
      calcArr.push(e.target.textContent)
      firstVal = '';
      outputTwo.textContent = calcArr.join(" ")
    } else if (calcArr.length >= 3) {
        firstVal = operate(calcArr[1], parseInt(calcArr[0]), parseInt(calcArr[2]));
        output.textContent = firstVal;
        calcArr = [];
    } else if (e.target.textContent === "=") {
        calcArr.push(firstVal)
        outputTwo.textContent = calcArr.join(" ")
        firstVal = '';
        output.textContent = operate(calcArr[1], parseInt(calcArr[0]), parseInt(calcArr[2]));
        calcArr = [];
    } else {
        firstVal += e.target.textContent;
        output.textContent = firstVal
    }  
}

buttons.forEach(btn => btn.addEventListener('click', logFunc))



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

