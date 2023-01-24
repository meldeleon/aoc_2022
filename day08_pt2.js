const input = require("fs")
  .readFileSync("day08_input.txt")
  .toString()
  .split(/\r?\n/)

//console.log(input)
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
  let visibilityArray = checkVisibilityScore([x, y])
  let possibleAnswer = visibilityArray.reduce((a, b) => a * b, 1)
  if (possibleAnswer > answer) {
    answer = possibleAnswer
  }
}
console.log(`the best possible viewing score is ${answer}`)

function checkVisibilityScore(coord) {
  let [x, y] = coord
  let neighboringTrees = getNeighboringTrees(coord)
  //console.log(neighboringTrees)
  let coordString = `${x},${y}`
  let height = forestMap[coordString].height
  let directionScores = []
  for (direction in neighboringTrees) {
    let treeRow = neighboringTrees[direction]
    //console.log(treeRow)
    let directionScore = 0
    for (let i = 0; i < treeRow.length; i++) {
      if (treeRow[i] < height) {
        directionScore++
      } else {
        directionScore++
        break
      }
    }
    directionScores.push(directionScore)
  }
  return directionScores
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
