const { stat } = require("fs")

const input = require("fs")
  .readFileSync("day09_input.txt")
  .toString()
  .split(/\r?\n/)

let state = {
  headX: 0,
  headY: 0,
  tailX: 0,
  tailY: 0,
  tailVisited: ["0,0"],
}

console.log({ state })
for (let i = 0; i < input.length; i++) {
  let [direction, spaces] = input[i].split(" ")
  spaces = parseInt(spaces)
  moveTowardGoal(state, direction, spaces)
}

let solutionSet = new Set([...state.tailVisited])
console.log(`the solution is ${solutionSet.size} `)

//Functions start here
function moveTowardGoal(state, direction, spaces) {
  console.log({ direction }, { spaces })
  for (let i = 0; i < spaces; i++) {
    switch (direction) {
      case "U":
        state.headY++
        break
      case "R":
        state.headX++
        break
      case "D":
        state.headY--
        break
      case "L":
        state.headX--
    }
    if (isAdjacent(state)) {
      // do not move tail
    } else {
      moveTail(state)
      let currentTailState = `${state.tailX},${state.tailY}`
      state.tailVisited.push(currentTailState)
    }
    console.log(state)
  }
}

function isAdjacent(state) {
  let { headX, headY, tailX, tailY } = state
  //console.log({ headX }, { headY }, { tailX }, { tailY })
  if (
    tailX >= headX - 1 &&
    tailX <= headX + 1 &&
    tailY >= headY - 1 &&
    tailY <= headY + 1
  ) {
    return true
  } else {
    return false
  }
}
function checkRow(state) {
  let { headY, tailY } = state
  return headY === tailY
}
function checkColumn(state) {
  let { headX, tailX } = state
  return headX === tailX
}

function findTaxiDistance(state) {
  let { headX, headY, tailX, tailY } = state
  let xDistance = headX - tailX
  let yDistance = headY - tailY
  //console.log(xDistance, yDistance)
  return [xDistance, yDistance]
}

function moveTail(state) {
  let [xDistance, yDistance] = findTaxiDistance(state)
  //check if in same row
  if (checkRow(state) | checkColumn(state)) {
    if (checkRow(state)) {
      if (xDistance >= 2) {
        state.tailX++
      }
      if (xDistance <= -2) {
        state.tailX--
      }
    }
    if (checkColumn(state)) {
      if (yDistance >= 2) {
        state.tailY++
      }
      if (yDistance <= -2) {
        state.tailY--
      }
    }
  } else {
    if (xDistance > 0 && yDistance > 0) {
      state.tailX++
      state.tailY++
    } else if (xDistance > 0 && yDistance < 0) {
      state.tailX++
      state.tailY--
    } else if (xDistance < 0 && yDistance > 0) {
      state.tailX--
      state.tailY++
    } else {
      state.tailX--
      state.tailY--
    }
  }
}
