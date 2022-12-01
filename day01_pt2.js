const input = require("fs")
  .readFileSync("day01_input.txt")
  .toString()
  .split(/\r?\n/)
// console.log(input)
let intMap = input.map((x) => {
  if (x === "") {
    return false
  } else {
    return parseInt(x)
  }
})
// console.log(intMap)

let elfTotals = []

let runningTotal = 0
for (let i = 0; i < intMap.length; i++) {
  if (intMap[i] !== false) {
    runningTotal += intMap[i]
  } else {
    elfTotals.push(runningTotal)
    runningTotal = 0
  }
}

//console.log(elfTotals)
let sorted = elfTotals.sort((a, b) => b - a)
let topThree = sorted[0] + sorted[1] + sorted[2]
console.log(`the answer is ${topThree}`)
