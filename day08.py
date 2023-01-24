with open('day08_input.txt') as f:
    trees = f.read().splitlines()

# print(trees)


forest_map = {}
x_max = len(trees[0])
y_max = len(trees)

for x in range(x_max):
    for y in range(y_max):
        key = (x, y)
        forest_map[key] = trees[y][x]

print(forest_map)


def get_neighboring_trees(coord):
    coord[0] = x
    coord[1] = y
    neighboring_trees = {
        'north': [],
        'east': [],
        'south': [],
        'west': []
    }
    # going north
    for n in
    # ask anythony how to translate this to python  for (let n = y - 1; n >= 0; n--)
