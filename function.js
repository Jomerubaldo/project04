const outPut = document.querySelector('#outPut');
const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const submit = document.querySelector('#submit');

submit.addEventListener('click', myFunction);
function myFunction() {
  const value1 = input1.value;
  const value2 = input2.value;
  const total = Number(value1) + Number(value2);

  document.querySelector('#outPut').innerHTML = total;
}
