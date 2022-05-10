const firstNum = prompt("Enter the first number")
const secondNum = prompt("Enter the second number")
const operator = prompt("Enter the operation (+, -, *, /, %)")

if (!firstNum || !secondNum || !operator) {
  console.log("Please insert two values and a valid operator")
} else {
  switch (operator) {
    case '+': {
      console.log(firstNum + secondNum)
      break
    }
    case '-': {
      console.log(firstNum - secondNum)
      break
    }
    case '*': {
      console.log(firstNum * secondNum)
      break
    }
    case '/': {
      console.log(firstNum / secondNum)
      break
    }
    case '%': {
      console.log(firstNum % secondNum)
      break
    }
    default: {
      console.log("Invalid operation!")
      break
    }
  }
}

