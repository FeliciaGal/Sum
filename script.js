"use script";

const input1 = document.getElementById("input-one");
const input2 = document.getElementById("input-two");
const btnCalc = document.getElementById("result");
const button = document.getElementById("btn-result");

function calculeazaSuma() {
  const one = input1.value;
  const two = input2.value;
  let sum = Number(one) + Number(two);
  document.getElementById("result").value = sum;
}

button.addEventListener("click", calculeazaSuma);
