const input = require("fs")
  .readFileSync("day03_input.txt")
  .toString()
  .split(/\r?\n/)
console.log(input)

let answerList = []
for (let i=0; i < input.length; i++) {
  let sack = input[i]
  let halfway = (sack.length/2)
  let comp1 =  sack.slice(0, halfway)
  let comp2 = sack.slice(halfway, sack.length)
  let dupe 
  for (let j=0; j < comp1.length; j++) {
    if (comp2.includes(comp1[j])){
      dupe = comp1[j]
    }
  }
  answerList.push(dupe)
}

console.log(answerList)
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

