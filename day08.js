const input = require("fs")
  .readFileSync("day08_input.txt")
  .toString()
  .split(/\r?\n/)

console.log(input)
let forestMap = {}
const xMax = input[0].length
const yMax = input.length
for (let y = 0; y < yMax; y++) {
  for (let x = 0; x < xMax; x++) {
    let key = `${x},${y}`
    forestMap[key] = {
      height: parseInt(input[y][x]),
      coordinate: [x, y],
    }
  }
}

let answer = 0
for (tree in forestMap) {
  let [x, y] = forestMap[tree].coordinate
  if (checkVisibility([x, y])) {
    answer++
    forestMap[tree].visibility = true
  }
}
console.log(`there are ${answer} visible trees`)

function checkVisibility(coord) {
  let [x, y] = coord
  let neighboringTrees = getNeighboringTrees(coord)
  let coordString = `${x},${y}`
  let height = forestMap[coordString].height
  let visibility = false
  for (direction in neighboringTrees) {
    let max = Math.max(...neighboringTrees[direction])
    if (max >= height) {
    } else {
      visibility = true
      //console.log("tree is visible")
    }
  }
  return visibility
}

function getNeighboringTrees(coord) {
  let [x, y] = coord
  let neighboringTrees = {
    north: [],
    east: [],
    south: [],
    west: [],
  }
  //going north
  for (let n = y - 1; n >= 0; n--) {
    let comparisonCoord = `${x},${n}`
    let comparisonTreeHeight = forestMap[comparisonCoord].height
    neighboringTrees.north.push(comparisonTreeHeight)
  }
  //going east
  for (let e = x + 1; e < xMax; e++) {
    let comparisonCoord = `${e},${y}`
    let comparisonTreeHeight = forestMap[comparisonCoord].height
    neighboringTrees.east.push(comparisonTreeHeight)
  }
  //going south
  for (let s = y + 1; s < yMax; s++) {
    let comparisonCoord = `${x},${s}`
    let comparisonTreeHeight = forestMap[comparisonCoord].height
    neighboringTrees.south.push(comparisonTreeHeight)
  }

  // going west
  for (let w = x - 1; w >= 0; w--) {
    let comparisonCoord = `${w},${y}`
    let comparisonTreeHeight = forestMap[comparisonCoord].height
    neighboringTrees.west.push(comparisonTreeHeight)
  }
  return neighboringTrees
}
