const input = require("fs")
  .readFileSync("day04_input.txt")
  .toString()
  .split(/\r?\n/)

let rangePairs = []

input.forEach((pair) => {
  let [range1, range2] = pair.split(",")
  let [range1Start, range1End] = range1.split("-")
  let [range2Start, range2End] = range2.split("-")
  rangePairs.push({
    start1: parseInt(range1Start),
    end1: parseInt(range1End),
    start2: parseInt(range2Start),
    end2: parseInt(range2End),
  })
})

let answer = 0
rangePairs.forEach((pair) => {
  if (rangeCheck(pair)) {
  }
})

console.log({ answer })
function rangeCheck(rangePair) {
  let { start1, end1, start2, end2 } = rangePair
  let smaller = findSmaller(rangePair)
  if (smaller === 1) {
    return start1 >= start2 && end1 <= end2
  } else {
    return start2 >= start1 && end2 <= end1
  }
}

function findSmaller(rangePair) {
  let { start1, end1, start2, end2 } = rangePair
  let range1 = parseInt(end1 - start1)
  let range2 = parseInt(end2 - start2)
  if (range1 >= range2) {
    return 2
  } else {
    return 1
  }
}
