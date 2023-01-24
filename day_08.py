with open('day08_input.txt') as f:
    trees = f.read().splitlines()

print(trees)

forest_map = {}
x_max = len(trees[0])
y_max = len(trees)

print(x_max, y_max)
