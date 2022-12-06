with open('day06_input.txt') as f:
    buffer = list(f.read())


def check_marker(marker):
    for i in range(len(marker)):
        rest_of_marker = marker[i+1: len(marker)+1]
        if (marker[i] in rest_of_marker):
            return False
    return True


def check_buffer(buff):
    for i in range(4, len(buffer)):
        marker = buffer[i-4:i]
        if check_marker(marker):
            return i


print(check_buffer(buffer))
