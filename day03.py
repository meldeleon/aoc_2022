with open('day03_input.txt') as f:
    sacks = f.read().splitlines()
# print(sacks)

answer_list = []
for sack in sacks:
    halfway = int(len(sack)/2)
    full = int(len(sack))
    comp1 = sack[0:halfway]
    comp2 = sack[halfway:full]
    for character in range(0, len(comp1)):
        if com[]
