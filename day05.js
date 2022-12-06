let stacks = {
  1: ["R", "N", "P", "G"],
  2: ["T", "J", "B", "L", "C", "S", "V", "H"],
  3: ["T", "D", "B", "M", "N", "L"],
  4: ["R", "V", "P", "S", "B"],
  5: ["G", "C", "Q", "S", "W", "M", "V", "H"],
  6: ["W", "Q", "S", "C", "D", "B", "J"],
  7: ["F", "Q", "L"],
  8: ["W", "M", "H", "T", "D", "L", "F", "V"],
  9: ["L", "P", "B", "V", "M", "J", "F"],
}

const instructionInput = require("fs")
  .readFileSync("day05_input.txt")
  .toString()
  .split(/\r?\n/)

//console.log(instructionInput)
instructionInput.forEach((instruction) => {
  let [move, repetition, from, origin, to, destination] = instruction.split(" ")
  // /console.log(repetition, origin, destination)
  for (let i = 0; i < repetition; i++) {
    stacks = moveCrate(origin, destination, stacks)
  }
})

console.log(stacks)
let answer = []
for (const stack in stacks) {
  answer.push(stacks[stack].pop())
}
console.log({ answer })

function moveCrate(origin, destination, stacks) {
  let newStacks = { ...stacks }
  let moving = newStacks[origin].pop()
  newStacks[destination].push(moving)
  return newStacks
}
