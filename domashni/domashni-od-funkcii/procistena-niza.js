const superheroes = [" avengers", "   captain_america", "ironman   ", " black panther   "]

const purifyList = (list) => {
  return list.map(el => el.trim())
}

console.log(purifyList(superheroes))

const fahrenheit = [80, 90, 100, 110]

const convertToCelsius = (temp) => {
  return temp.map(el => ((el - 32)*5)/9)
}

console.log(convertToCelsius(fahrenheit))


const mergeStrings = (list) => {
  return list.reduce((acc, curr, index) => {
    if (index === list.length - 1) {
      return acc += curr
    }
    return acc += curr + '-'

    // moze da se napise i so ternaren operator
    // return (index === list.length - 1) ? acc += curr : acc += curr + '-'
  }, '')
}

console.log(mergeStrings(purifyList(superheroes)))

// immutability --> originalniot podatok ne se menuva, tuku se kreira modificirana kopija