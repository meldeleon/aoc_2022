with open('day05_input.txt') as f:
    instructions = f.read().splitlines()

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


def move_crate(origin, dest, stacks):
    after_stacks = stacks.copy()
    moving = after_stacks[origin].pop()
    after_stacks[dest].append(moving)
    # print(after_stacks)
    return after_stacks


for instruction in instructions:
    arr = instruction.split(" ")
    rep = int(arr[1])
    origin = int(arr[3])
    dest = int(arr[5])
    for i in range(rep):
        stacks = move_crate(origin, dest, stacks)

answer = []
for stack in stacks.values():
    answer.append(stack.pop())
print(answer)
