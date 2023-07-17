window.addEventListener("load", function() {
  let form = document.getElementById("form");
  let submit = document.querySelector("#form button[type='submit']");
});

function creditCard(input) {
  if (typeof input === "number" && input.toString().length === 16) {
    const evens = [];
    const inputStr = input.toString();

    for (let i = 0; i < inputStr.length; i++) {
      if (inputStr[i] % 2 === 0) {
        evens.push(parseInt(inputStr[i]));
      }
    }

    const reversedArr = [];
    for (let i = evens.length - 1; i >= 0; i--) {
      let num = evens[i];
      if (num >= 10 && num <= 99) {
        num = Math.floor(num / 10) + (num % 10);
      }
      reversedArr.push(num);
    }

    let finalArr = [];
    let sum = 0;
    for (let i = 0; i < reversedArr.length; i++) {
      sum += reversedArr[i];
      finalArr.push(sum);
    }

    if (finalArr[finalArr.length - 1] === 0) {
      return input + " is a credit card number.";
    } else {
      return input + " is not a credit card number.";
    }
  } else {
    return input + " is not a credit card number.";
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const creditCardNumber = document.getElementById("credit-card-number").value;
  const output = document.getElementById("output");
  const result = creditCard(creditCardNumber);
  output.textContent = result;
}

document.getElementById("form").addEventListener("submit", handleSubmit);