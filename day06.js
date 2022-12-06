const buffer = require("fs")
  .readFileSync("day06_input.txt")
  .toString()
  .split("")

let answer = checkBuffer(buffer)

function checkBuffer(buffer) {
  for (let i = 4; i < buffer.length; i++) {
    let marker = buffer.slice(i - 4, i)
    console.log(marker)
    if (isUniqueMarker(marker)) {
      return i
    }
  }
}

console.log(answer)

function isUniqueMarker(marker) {
  for (let j = 0; j < marker.length; j++) {
    let restOfMarker = marker.slice(j + 1, marker.length + 1)
    //console.log(restOfMarker)
    if (restOfMarker.includes(marker[j])) {
      return false
    }
  }
  return true
}
