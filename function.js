// Get reference
const displayOutPut = document.querySelector('#displayOutPut');
const inputValue1 = document.querySelector('#inputValue1');
const inputValue2 = document.querySelector('#inputValue2');
const addButton = document.querySelector('#add');
const minusButton = document.querySelector('#minus');
const multiButton = document.querySelector('#multiplication');
const divideButton = document.querySelector('#divide');
const myResetButton = document.querySelector('#reset');

// Initial value  need if you want reset
let value = 0;

// Create function Add
addButton.addEventListener('click', myAddFunction);
function myAddFunction() {
  const addValue1 = inputValue1.value;
  const addValue2 = inputValue2.value;
  const total = Number(addValue1) + Number(addValue2);

  // Clear input Every click function
  inputValue1.value = '';
  inputValue2.value = '';

  // Using DOM to display output
  document.querySelector('#displayOutPut').innerHTML = total;
}

// Create function Add
minusButton.addEventListener('click', myMinusFunction);
function myMinusFunction() {
  const minusValue1 = inputValue1.value;
  const minusValue2 = inputValue2.value;
  const total = Number(minusValue1) - Number(minusValue2);

  // Clear input Every click function
  inputValue1.value = '';
  inputValue2.value = '';

  // Using DOM to display output
  document.querySelector('#displayOutPut').innerHTML = total;
}

// Create function multiplication
multiButton.addEventListener('click', myMultiFunction);
function myMultiFunction() {
  const multiValue1 = inputValue1.value;
  const multiValue2 = inputValue2.value;
  const total = Number(multiValue1) * Number(multiValue2);

  // Clear input Every click function
  inputValue1.value = '';
  inputValue2.value = '';

  // Using DOM display output
  document.querySelector('#displayOutPut').innerHTML = total;
}

// Create function divide
divideButton.addEventListener('click', myDivideFunction);
function myDivideFunction() {
  const divideValue1 = inputValue1.value;
  const divideValue2 = inputValue2.value;
  const total = Number(divideValue1) / Number(divideValue2);

  // Clear input Every click function
  inputValue1.value = '';
  inputValue2.value = '';

  // Using DOM display output
  document.querySelector('#displayOutPut').innerHTML = total;
}

// Create function reset
myResetButton.addEventListener('click', myResetFunction);
function myResetFunction() {
  // Reset
  count = 0;

  // Using DOM display output
  document.querySelector('#displayOutPut').innerHTML = count;
}
