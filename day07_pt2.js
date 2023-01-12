const input = require("fs")
  .readFileSync("day07_input.txt")
  .toString()
  .split(/\r?\n/)

var pwd = []
const dictionary = {}

for (let i = 0; i < input.length; i++) {
  let line = input[i]
  //console.log({ pwd })
  //command
  if (isCmd(line)) {
    let [$, cmd, arg] = line.split(" ")
    if (cmd === "cd") {
      //changes pwd
      handleCd(arg)
    } else if (cmd === "ls") {
      //do nothing
    }
  }
  //handle a response to LS
  else {
    //console.log({ pwd })
    let [prefix, name] = line.split(" ")
    let path = generatePath(pwd, name)
    //console.log(path)
    handleLsResponse(prefix, path)
  }
}

let solutionArr = []
const currentUsedSpace = findDirSize("/", dictionary)
const unusedSpace = 70000000 - currentUsedSpace
const memoryToDelete = Math.abs(30000000 - unusedSpace)
//console.log(currentUsedSpace, memoryToDelete)
for (entry in dictionary) {
  if (dictionary[entry].type === "dir") {
    let dirSize = findDirSize(entry, dictionary)
    //console.log(entry, dirSize)
    if (dirSize >= memoryToDelete) {
      solutionArr.push({
        dir: entry,
        size: dirSize,
      })
    }
  }
}

//console.log(solutionArr)
let solution
solutionArr.forEach((dir, index) => {
  if (index === 0) {
    solution = dir
  } else {
    if (dir.size <= solution.size) {
      solution = dir
    }
  }
})
console.log(`the solution is ${solution.size}`)

function isCmd(line) {
  return line.startsWith("$")
}

function generatePath(pwdArr, name) {
  let joinedArr = pwdArr.join("/")
  if (joinedArr) {
    return `/${joinedArr}/${name}`
  } else {
    return `/${name}`
  }
}

function handleCd(arg) {
  switch (arg) {
    case "/":
      //top dir
      pwd = []
      break
    case "..":
      //up one dir
      pwd.pop()
      break
    default:
      pwd.push(arg)
    //change dir
  }
  //console.log(pwd)
}

function handleLsResponse(prefix, path) {
  if (prefix === "dir") {
    addToDict("dir", path)
  } else {
    addToDict("file", path, prefix)
  }
}

function addToDict(type, path, size) {
  if (dictionary[path]) {
  } else {
    if (type === "dir") {
      dictionary[path] = {
        type: "dir",
        size: 0,
      }
    } else {
      dictionary[path] = {
        type: "file",
        size: parseInt(size),
      }
    }
  }
}

function findDirSize(dir, dict) {
  let dirSize = 0
  for (item in dict) {
    if (item.startsWith(dir) && dict[item].type === "file") {
      dirSize += dict[item].size
    }
  }
  return dirSize
}
