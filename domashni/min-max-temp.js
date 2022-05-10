const temp = [12, 15, 14, 20, 22, 30]

let sum = 0;
let minTemp = temp[0]
let maxTemp = temp[0]

for (let i = 0; i< temp.length; i++) {
  sum += temp[i]

  if (temp[i] > maxTemp) {
    maxTemp = temp[i]
  }
  if (temp[i] < minTemp) {
    minTemp = temp[i]
  }
  
}

maxTemp = Math.max(...temp) // spread operator => 12,15,14,20,22,30
minTemp = Math.min(...temp)

temp.sort() // sorts by ascending by default
minTemp = temp[0]
maxTemp = temp[temp.length - 1]


// if (!temp.length) console.log(0)
// else console.log(sum / temp.length)
console.log(!temp.length ? 0 : sum / temp.length)
console.log(`Max temp: ${maxTemp}; Min temp: ${minTemp}`)