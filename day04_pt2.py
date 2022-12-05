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


def find_higher_start(range_pair):
    start1 = range_pair['start1']
    start2 = range_pair['start2']
    if start1 >= start2:
        return 1
    else:
        return 2


def check_range(range_pair):
    start1 = range_pair['start1']
    end1 = range_pair['end1']
    start2 = range_pair['start2']
    end2 = range_pair['end2']
    higher_start = find_higher_start(range_pair)
    if higher_start == 1:
        return start1 <= end2
    else:
        return start2 <= end1


answer = 0
for range_pair in range_pairs:
    if check_range(range_pair):
        #print(f'{range_pair} is in range')
        answer += 1
print(answer)
