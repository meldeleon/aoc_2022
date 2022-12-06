with open('day05_input.txt') as f:
    instructions = f.read().splitlines()
# stacks = {
#     1: ["Z", "N"],
#     2: ["M", "C", "D"],
#     3: ["P"],
# }

stacks = {
    1: ["R", "N", "P", "G"],
    2: ["T", "J", "B", "L", "C", "S", "V", "H"],
    3: ["T", "D", "B", "M", "N", "L"],
    4: ["R", "V", "P", "S", "B"],
    5: ["G", "C", "Q", "S", "W", "M", "V", "H"],
    6: ["W", "Q", "S", "C", "D", "B", "J"],
    7: ["F", "Q", "L"],
    8: ["W", "M", "H", "T", "D", "L", "F", "V"],
    9: ["L", "P", "B", "V", "M", "J", "F"]
}


def move_crates(count, origin, dest, stacks):
    after_stacks = stacks.copy()
    moving = []
    for i in range(count):
        moving.append(after_stacks[origin].pop())
    moving.reverse()
    # print(moving)
    after_stacks[dest].extend(moving)
    # print(after_stacks)
    return after_stacks


for instruction in instructions:
    arr = instruction.split(" ")
    count = int(arr[1])
    origin = int(arr[3])
    dest = int(arr[5])
    stacks = move_crates(count, origin, dest, stacks)
    print(stacks)


answer = []
for stack in stacks.values():
    answer.append(stack.pop())
print(answer)
