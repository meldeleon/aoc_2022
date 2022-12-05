with open('day04_input.txt') as f:
    input = f.read().splitlines()
# print(input)

range_pairs = []
for range_pair in input:
    range1, range2 = range_pair.split(",")
    start1, end1 = range1.split("-")
    start2, end2 = range2.split("-")
    range_pairs.append({
        'start1': int(start1),
        'end1': int(end1),
        'start2': int(start2),
        'end2': int(end2)})
# print(range_pairs)


def find_smaller(range_pair):
    range1 = range_pair["end1"] - range_pair["start1"]
    range2 = range_pair["end2"] - range_pair["start2"]
    if range1 >= range2:
        return 2
    else:
        return 1


def check_range(range_pair):
    smaller = find_smaller(range_pair)
    if smaller == 1:
        return start1 >= start2 and end1 <= end2
    else:
        return start2 >= start1 and end2 <= end1


answer = 0
for range_pair in range_pairs:
    if check_range(range_pair):
        print(f'{range_pair} is in range')
        answer += 1
    else:
        print(f'{range_pair} is not in range')
print(answer)
