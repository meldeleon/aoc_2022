// a rock 1
// b paper 2
// c scissors 3
// x lose
// y draw
// z win

const input = require("fs")
  .readFileSync("day02_input.txt")
  .toString()
  .split(/\r?\n/)
//console.log(input)
let answer = 0
for (let i = 0; i < input.length; i++) {
  let [opp, me] = input[i].split(" ")
  answer += calculateScore(opp, me)
}

console.log({ answer })
function calculateScore(opp, me) {
  if (opp === "A") {
    // rock
    switch (me) {
      case "X":
        // play sci
        return 3
        break
      case "Y":
        //play rock
        return 4
        break
      case "Z":
        // play paper
        return 8
    }
  } else if (opp === "B") {
    // paper
    switch (me) {
      case "X":
        //rock
        return 1
        break
      case "Y":
        //paper
        return 5
        break
      case "Z":
        //sci
        return 9
    }
  } else if ((opp = "C")) {
    // sci
    switch (me) {
      case "X":
        //paper
        return 2
        break
      case "Y":
        //sci
        return 6
        break
      case "Z":
        //rock
        return 7
    }
  } else {
    console.log(`invalid input ${opp}, ${me}`)
  }
}
