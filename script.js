let buttons = document.querySelectorAll(".btn")
let output = document.querySelector(".calcOutput")
let outputTwo = document.querySelector(".calcOutputTwo")
let firstVal = '';
let calcArr = [];

let logFunc = (e) => {
  console.log(e.target.textContent);  
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

