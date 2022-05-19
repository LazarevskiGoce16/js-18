// 5! => 5*4*3*2*1

const factoriel = (number) => {
  let fact = 1
  for (let i = number; i > 0; i--) {
    fact = fact*i
  }
  return fact

}

const factorielRecursive = (number) => {
  if (number <= 1) {
    return number
  }
  return number * factorielRecursive(number - 1);
}


console.log(factorielRecursive(5))