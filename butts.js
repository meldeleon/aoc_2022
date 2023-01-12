let butts = {
  "/a": { type: "dir", size: 0 },
  "/b.txt": { type: "file", size: 14848514 },
  "/c.dat": { type: "file", size: 8504156 },
  "/d": { type: "dir", size: 0 },
  "/a/e": { type: "dir", size: 0 },
  "/a/f": { type: "file", size: 29116 },
  "/a/g": { type: "file", size: 2557 },
  "/a/h.lst": { type: "file", size: 62596 },
  "/a/e/i": { type: "file", size: 584 },
  "/d/j": { type: "file", size: 4060174 },
  "/d/d.log": { type: "file", size: 8033020 },
  "/d/d.ext": { type: "file", size: 5626152 },
  "/d/k": { type: "file", size: 7214296 },
}

for (item in butts) {
  console.log(typeof item)
}
