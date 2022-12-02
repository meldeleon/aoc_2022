with open('day02_input.txt') as f:
    matches = f.read().split("\n")


def calculateScore(opp, me):
    if opp == "A":
        if me == "X":
            return 3
        elif me == "Y":
            return 4
        elif me == "Z":
            return 8
    elif opp == "B":
        if me == "X":
            return 1
        elif me == "Y":
            return 5
        elif me == "Z":
            return 9
    elif opp == "C":
        if me == "X":
            return 2
        elif me == "Y":
            return 6
        elif me == "Z":
            return 7


answer = 0
for match in matches:
    opp, me = match.split(" ")
    answer += calculateScore(opp, me)
print(answer)
