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

  // Check if the user enter a value if not display message
  if (inputValue1.value === '' || inputValue2.value === '') {
    alert('Please Enter a Value!');
    return;
  }

  // Store value and do the function here
  const total = Number(addValue1) + Number(addValue2);

  // Using DOM to display output
  document.querySelector('#displayOutPut').innerHTML = total;

  // Clear input Every click function
  inputValue1.value = '';
  inputValue2.value = '';
}

// Create function Add
minusButton.addEventListener('click', myMinusFunction);
function myMinusFunction() {
  const minusValue1 = inputValue1.value;
  const minusValue2 = inputValue2.value;

  // Check if the user enter a value if not display message
  if (inputValue1.value === '' || inputValue2.value === '') {
    alert('Please re enter the value!');
    return;
  }

  // Store value and do the function here
  const total = Number(minusValue1) - Number(minusValue2);

  // Using DOM to display output
  document.querySelector('#displayOutPut').innerHTML = total;

  // Clear input Every click function
  inputValue1.value = '';
  inputValue2.value = '';
}

// Create function multiplication
multiButton.addEventListener('click', myMultiFunction);
function myMultiFunction() {
  const multiValue1 = inputValue1.value;
  const multiValue2 = inputValue2.value;

  // Check if the user enter a value if not display message
  if (inputValue1.value === '' || inputValue2.value === '') {
    alert('Please re enter the value!');
    return;
  }

  // Store value and do the function here
  const total = Number(multiValue1) * Number(multiValue2);

  // Using DOM display output
  document.querySelector('#displayOutPut').innerHTML = total;

  // Clear input Every click function
  inputValue1.value = '';
  inputValue2.value = '';
}

// Create function divide
divideButton.addEventListener('click', myDivideFunction);
function myDivideFunction() {
  const divideValue1 = inputValue1.value;
  const divideValue2 = inputValue2.value;

  // Check if the user enter a value if not display message
  if (inputValue1.value === '' || inputValue2.value === '') {
    alert('Please re enter the value!');
    return;
  }

  // Store value and do the function here
  const total = Number(divideValue1) / Number(divideValue2);

  // Using DOM display output
  document.querySelector('#displayOutPut').innerHTML = total;

  // Clear input Every click function
  inputValue1.value = '';
  inputValue2.value = '';
}

// Create function reset
myResetButton.addEventListener('click', myResetFunction);
function myResetFunction() {
  // Reset
  count = 0;

  // Using DOM display output
  document.querySelector('#displayOutPut').innerHTML = count;
}
