let state = {
  headX: 0,
  headY: 0,
  tailX: 1,
  tailY: 1,
  tailVisited: [],
}
console.log({ state })

function updateState(state) {
  state.tailVisited.push("butts")
}
updateState(state)

console.log(state)
