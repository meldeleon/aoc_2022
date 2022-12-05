const { parse } = require("path")

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
    start1: range1Start,
    end1: range1End,
    start2: range2Start,
    end2: range2End,
  })
})

let answer = 0
rangePairs.forEach((pair) => {
  if (rangeCheck(pair)) {
    console.log(
      `TRUE: ${pair.start1} - ${pair.end1} and ${pair.start2} - ${pair.end2}`
    )
    answer++
  } else {
    console.log(
      `FALSE: ${pair.start1} - ${pair.end1} and ${pair.start2} - ${pair.end2}`
    )
  }
})

console.log({ answer })
function rangeCheck(rangePair) {
  let { start1, end1, start2, end2 } = rangePair
  let smaller = findSmaller(rangePair)
  //console.log(smaller)
  if (smaller === 1) {
    if (start1 >= start2 && end1 <= end2) {
      return true
    } else {
      return false
    }
  } else {
    if (start2 >= start1 && end2 <= end1) {
      return true
    } else {
      return false
    }
  }
}

function findSmaller(rangePair) {
  let { start1, end1, start2, end2 } = rangePair
  range1 = parseInt(end1 - start1)
  range2 = parseInt(end2 - start2)
  if (range1 >= range2) {
    return 2
  } else {
    return 1
  }
}
