const { strictEqual } = require("assert")
// little input
// let stacks = {
//   1: ["Z", "N"],
//   2: ["M", "C", "D"],
//   3: ["P"],
// }

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
  let [move, count, from, origin, to, destination] = instruction.split(" ")
  count = parseInt(count)
  stacks = moveCrates(count, origin, destination, stacks)
})

console.log(stacks)
let answer = []
for (const stack in stacks) {
  answer.push(stacks[stack].pop())
}
console.log({ answer })

function moveCrates(count, origin, destination, stacks) {
  let newStacks = { ...stacks }
  let moving = new Array(count)
  for (let i = count; i > 0; i--) {
    let movingCrate = newStacks[origin].pop()
    moving[i] = movingCrate
  }
  console.log(moving)
  newStacks[destination].push(moving)
  newStacks[destination] = newStacks[destination].flat()
  console.log(newStacks[origin], newStacks[destination])
  console.log({ newStacks })
  return newStacks
}
