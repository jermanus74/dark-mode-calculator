const display = document.querySelector("#display");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.querySelector("#clear");
const deleteButton = document.querySelector("#backspace");
const equalButton = document.querySelector(".equal");
const decimalButton = document.querySelector("#decimal");
const themeToggle = document.querySelector(".theme");
const calculator = document.querySelector(".calculator");

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (display.innerText === "0" && button.innerText === "0") {
      return;
    }
    display.innerText += button.innerText;
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const operator = button.innerText;
    display.innerText += operator;
  });
});

deleteButton.addEventListener("click", () => {
  display.innerText = display.innerText.slice(0, -1);
});
const calculate = () => {
    const expression = display.innerText;
    const result = eval(expression);
    display.innerText =result;
  };
  
equalButton.addEventListener("click",calculate);

clearButton.addEventListener("click", () => {
  display.innerText = "";
});

decimalButton.addEventListener("click", () => {
  if (!display.innerText.includes(".")) {
    display.innerText += ".";
  }
});

themeToggle.addEventListener("click", () => {
  calculator.classList.toggle("dark");
  themeToggle.classList.toggle("active");
});

