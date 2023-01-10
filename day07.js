const input = require("fs")
  .readFileSync("day07_input.txt")
  .toString()
  .split(/\r?\n/)

var pwd = ["/"]
const dictionary = {
  "/": {
    type: "dir",
    contents: [],
    size: 0,
  },
}

for (let i = 0; i < input.length; i++) {
  let line = input[i]
  let parent = pwd[pwd.length - 1]
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
  //response to LS
  else {
    let [prefix, name] = line.split(" ")
    handleLsResponse(parent, prefix, name)
  }
}

Object.keys(dictionary).forEach((entryName) => {
  if (dictionary[entryName].type === "file") {
    addSizeToParent(entryName)
  }
})

let solution = 0
for (entry in dictionary) {
  //console.log(entry)
  if (dictionary[entry].type === "dir" && dictionary[entry].size < 100000) {
    solution += parseInt(dictionary[entry].size)
  }
}

console.log(`The solution is ${solution}`)

function addSizeToParent(fileName) {
  let queue = [dictionary[fileName].parent_dir]
  while (queue.length > 0) {
    let parent = queue.shift()
    //console.log({ parent })
    if (dictionary[parent]) {
      dictionary[parent].size += parseInt(dictionary[fileName].size)
      queue.push(dictionary[parent].parent_dir)
    }
  }
}

console.log(dictionary)

function isCmd(line) {
  return line.startsWith("$")
}

function handleCd(arg) {
  switch (arg) {
    case "/":
      //top dir
      pwd = ["/"]
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

/*
const dictionary = {
  "/": {
    type: "dir",
    contents: ["a", "b.txt"],
    size: 0
  }
}
*/

function handleLsResponse(parent, prefix, name) {
  addChildrenToParent(parent, name)
  if (prefix === "dir") {
    addToDict("dir", name, parent)
  } else {
    addToDict("file", name, parent, prefix)
  }
}

function addChildrenToParent(parent, name) {
  if (dictionary[parent]) {
    if (dictionary[parent].contents.includes(name)) {
    } else {
      dictionary[parent].contents.push(name)
    }
  } else {
    dictionary[parent] = {
      type: "dir",
      contents: [name],
      size: 0,
    }
  }
}

function addToDict(type, name, parent, size) {
  if (dictionary[name]) {
  } else {
    if (type === "dir") {
      dictionary[name] = {
        type: "dir",
        contents: [],
        size: 0,
        parent_dir: parent,
      }
    } else {
      dictionary[name] = {
        type: "file",
        contents: [],
        size: parseInt(size),
        parent_dir: parent,
      }
    }
  }
}
