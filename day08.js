const input = require("fs")
  .readFileSync("day08_input.txt")
  .toString()
  .split(/\r?\n/)

let rows = input.map((row) => {
  return row.split("")
})
let reverseRows = rows.map((row) => {
  let reverseRow = []
  for (let i = row.length - 1; i >= 0; i--) {
    reverseRow.push(row[i])
  }
  return reverseRow
})

let columns = []
for (let j = 0; j < rows[0].length; j++) {
  let column = rows.map((row) => {
    return row[j]
  })
  columns.push(column)
}

let reverseColumns = columns.map((column) => {
  let reverseColumn = []
  for (let i = column.length - 1; i >= 0; i--) {
    reverseColumn.push(column[i])
  }
  return reverseColumn
})

const forest = reverseRows.concat(reverseRows, columns, reverseColumns)
//console.log(forest)

function findVisible(arr) {
  console.log(arr)
  //edge is always visible
  let visibleArr = [arr[0]]
  for (let i = 1; i < arr.length; i++) {
    let visible
    visibleArr.forEach((visibleTree) => {
      if (arr[i] > visibleTree) {
        visible = true
      } else {
        visible = false
      }
    })
    if (visible) {
      visibleArr.push(arr[i])
    }
  }
  return visibleArr
}

let solutionArray = []

forest.forEach((set) => {
  let visible = findVisible(set)
  visible.forEach((x) => solutionArray.push(x))
})

console.log(solutionArray)

console.log(`there are ${solutionArray.length} trees visible`)
