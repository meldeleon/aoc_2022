with open('day01_input.txt') as f:
    chunks = f.read().split("\n\n")
lst = []

for chunk in chunks:
    total = 0
    for line in chunk.splitlines():
        total += int(line)
        lst.append(total)
lst.sort(reverse=True)
print(lst[0])

print(sum(lst[:3]))
