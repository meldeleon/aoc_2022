var pwd = ["/"]
const dictionary = {
  "/": {
    type: "dir",
    contents: [],
    size: 0,
  },
}

handleLsResponse("/", "dir", "a")
handleLsResponse("a", "29116", "f")

console.log(dictionary)

function handleLsResponse(parent, prefix, name) {
  addToParent(parent, name)
  if (prefix === "dir") {
    addToDict("dir", name)
  } else {
    addToDict("file", name, prefix)
  }
}

function addToParent(parent, name) {
  if (dictionary[parent]) {
    dictionary[parent].contents.push(name)
  } else {
    dictionary[parent] = {
      type: "dir",
      contents: [name],
      size: 0,
    }
  }
}

function addToDict(type, name, size) {
  if (dictionary[name]) {
  } else {
    if (type === "dir") {
      dictionary[name] = {
        type: "dir",
        contents: [],
        size: 0,
      }
    } else {
      dictionary[name] = {
        type: "file",
        contents: [],
        size: size,
      }
    }
  }
}
