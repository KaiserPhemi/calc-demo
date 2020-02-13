let runningTotal = 0;
let buffer = "0";
let prevOperator;

const screen = document.querySelector(".result");

const buttonClick = value => {
  if (value === "C") {
    screen.innerText = buffer;
  } else {
    screen.innerText = value;
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
