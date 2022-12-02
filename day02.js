// a x rock 1
// b y paper 2
// c z scissors 3

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
    switch (me) {
      case "X":
        return 4
        break
      case "Y":
        return 8
        break
      case "Z":
        return 3
    }
  } else if (opp === "B") {
    switch (me) {
      case "X":
        return 1
        break
      case "Y":
        return 5
        break
      case "Z":
        return 9
    }
  } else if ((opp = "C")) {
    switch (me) {
      case "X":
        return 7
        break
      case "Y":
        return 2
        break
      case "Z":
        return 6
    }
  } else {
    console.log(`invalid input ${opp}, ${me}`)
  }
}
