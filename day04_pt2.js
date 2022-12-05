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
    // console.log(
    //   `TRUE: ${pair.start1} - ${pair.end1} and ${pair.start2} - ${pair.end2}`
    // )
    answer++
  } else {
    // console.log(
    //   `FALSE: ${pair.start1} - ${pair.end1} and ${pair.start2} - ${pair.end2}`
    // )
  }
})

console.log({ answer })
function rangeCheck(rangePair) {
  let { start1, end1, start2, end2 } = rangePair
  let higherStart = findHigherStart(rangePair)
  //console.log(smaller)
  if (higherStart === 1) {
    return start1 <= end2
  } else {
    return start2 <= end1
  }
}

function findHigherStart(rangePair) {
  let { start1, end1, start2, end2 } = rangePair
  if (start1 >= start2) {
    return 1
  } else {
    return 2
  }
}
