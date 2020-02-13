const screen = document.querySelector(".result");
let runningTotal = 0;
let buffer = "0";
let prevOperator;

/**
 * @desc handles button clicked
 * @param {object} value
 */
const buttonClick = value => {
  if (isNaN(value)) {
    handleSymbol(value);
  } else {
    handleNumber(value);
  }
  screen.innerText = buffer;
};

/**
 * @desc handles number operation
 */
const handleNumber = numString => {
  if (buffer === "0") {
    buffer = numString;
  } else {
    buffer += numString;
  }
};

/**
 * @desc handles symbol operation
 */
const handleSymbol = symbol => {
  console.log(symbol);
  switch (symbol) {
    case "C":
      buffer = "0";
      runningTotal = 0;
      break;
    default:
  }
};

/**
 * @desc gets the value from every item clicked
 */
const init = () => {
  document.querySelector("#main-app").addEventListener("click", event => {
    buttonClick(event.target.innerText);
  });
};

init();
