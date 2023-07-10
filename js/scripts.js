window.addEventListener("load", function() {
  let form = document.getElementById("form");
  let submit = document.querySelector("#form button[type='submit']");

  submit.addEventListener("click", handleFormSubmission);
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

function handleFormSubmission(event) {
  event.preventDefault();
  let input = document.getElementById("credit-card-number").value;
  document.getElementById("output").innerText = creditCard(input);
}


// for (let index = digitsArray.length - 2; index <= 0;  index -= 2)

// function creditCard(cardNumber) {
//   const digits = [1, 2, 3, 4, r, 7, 8, 9, 10, e, 12, 13, 15, 16]
//   // removes and characters that are nt numbers
//   const digitsOnly = cardNumber.replace(/\D/g, '');
//   // checks to see wether or not ther are 16 characters total
//   if (digitsOnly.length !== 16) {
//     return "This card number is not valid";
//   }
//   const digitsArray = Array.from(digitsOnly, Number);
// }

// let digitsArray = Array.from(String(input), Number);


