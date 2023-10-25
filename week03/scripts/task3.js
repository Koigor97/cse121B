"use strict";
/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2
// Step 2: In the function, return the sum of the parameters number1 and number2
function add(num1, num2) {
  const sum = parseInt(num1) + parseInt(num2);
  return sum;
}

// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function
// Step 4: Assign the return value to an HTML form element with an ID of sum
function addNumbers() {
  let firstNum = document.querySelector("#addend1").value;
  let secondNum = document.querySelector("#addend2").value;
  const theSum = add(firstNum, secondNum);
  document.getElementById("sum").value = theSum;
}
// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
document.querySelector("#addNumbers").addEventListener("click", addNumbers);

// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers
const subtract = function (num1, num2) {
  const sub = num1 - num2;
  return sub;
};

const subtractNumbers = function () {
  let firstNum = document.querySelector("#minuend").value;
  let secondNum = document.querySelector("#subtrahend").value;
  const theDiff = subtract(firstNum, secondNum);
  document.getElementById("difference").value = theDiff;
};
document
  .querySelector("#subtractNumbers")
  .addEventListener("click", subtractNumbers);

// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers
const multiply = (num1, num2) => {
  return num1 * num2;
};

const multiplyNumbers = () => {
  let firstNum = document.querySelector("#factor1").value;
  let secondNum = document.querySelector("#factor2").value;
  const theProduct = multiply(firstNum, secondNum);
  document.getElementById("product").value = theProduct;
};
document
  .querySelector("#multiplyNumbers")
  .addEventListener("click", multiplyNumbers);
// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers
const divide = function (num1, num2) {
  const divisor = num1 / num2;
  return divisor;
};

const divideNumbers = function () {
  let firstNum = document.querySelector("#dividend").value;
  let secondNum = document.querySelector("#divisor").value;
  const quotient = divide(firstNum, secondNum);
  document.getElementById("quotient").value = quotient;
};
document
  .querySelector("#divideNumbers")
  .addEventListener("click", divideNumbers);

// Step 9: Test all of the mathematical functionality of the task3.html page.

/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
const theDate = new Date();
// Step 2: Declare a variable to hold the current year
// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2
const year = theDate.getFullYear();
// Step 4: Assign the current year variable to an HTML form element with an ID of year
document.getElementById("year").textContent = year;
/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
const nums = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25,
];
// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
document.querySelector("#array").textContent = nums;
// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
const oddNums = nums.filter(num => num % 2 !== 0);
document.querySelector("#odds").textContent = oddNums;
// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
const evenNums = nums.filter(num => num % 2 === 0);
document.querySelector("#evens").textContent = evenNums;
// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
let initialValue = 0;
const sum = nums.reduce(
  (accumilator, currentValue) => accumilator + currentValue,
  initialValue
);
document.querySelector("#sumOfArray").textContent = sum;
// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
const timesTwo = nums.map(num => num * 2);
document.querySelector("#multiplied").textContent = timesTwo;
// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
const sum2 = timesTwo.reduce(
  (accumilator, currentValue) => accumilator + currentValue,
  initialValue
);
document.querySelector("#sumOfMultiplied").textContent = sum2;
