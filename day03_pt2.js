const input = require("fs")
  .readFileSync("day03_input.txt")
  .toString()
  .split(/\r?\n/)
console.log(input)

let answerList = []
for (let i=0; i < input.length; i+=3) {
    let sack1 = input[i]
    let sack2 = input[i+1]
    let sack3 = input[i+2]
    let answer
    for (let j=0; j<sack1.length; j++) {
        if (sack2.includes(sack1[j]) && sack3.includes(sack1[j])){
            answer = sack1[j]
        }
    }
    answerList.push(answer)
}
console.log (answerList)
const lowAlphabet = 'abcdefghijklmnopqrstuvwxyz'
const capAlphabet = lowAlphabet.toUpperCase()
const doubleAlphabet = lowAlphabet.concat(capAlphabet)
let map = {}
for (let k=0; k<doubleAlphabet.length; k++) {
  map[doubleAlphabet[k]] = k+1
}
let sum = 0
answerList.forEach( x=> {
  sum += map[x]
})
console.log(sum)

