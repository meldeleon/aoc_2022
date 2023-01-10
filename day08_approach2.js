const { captureRejectionSymbol } = require("events")

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
      height: input[y][x],
      coordinate: [x, y],
    }
  }
}

for (tree in forestMap) {
  let [x, y] = forestMap[tree].coordinate
  //if edge, set visible to true
  if (x === 0 || y === 0 || x === xMax - 1 || y === yMax - 1) {
    forestMap[tree].visible = true
  }
}

console.log(forestMap)
