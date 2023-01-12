pwd = []
directory = {}


def is_command(str):
    return str.startswith("$")


def change_pwd(arg):
    global pwd
    if arg == "/":
        pwd = []
    elif arg == "..":
        pwd.pop()
    else:
        pwd.append(arg)


def generate_path(pwdArr, name):
    joinedArr = ("/").join(pwdArr)
    if joinedArr:
        return f"/{joinedArr}/{name}"
    else:
        return f"/{name}"


def add_entry_to_dict(type, path, size):
    global directory
    if not path in directory:
        if type == "dir":
            directory[path] = {
                "type": 'dir',
                "size": 0
            }
        else:
            directory[path] = {
                "type": "file",
                "size": int(size)
            }


def handle_ls_response(prefix, path):
    if prefix == "dir":
        add_entry_to_dict("dir", path)
    else:
        add_entry_to_dict("file", path, prefix)


def find_dir_size(dir):
    global directory
    dir_size = 0
    for item in directory:
        if item.startswith(dir) and directory[item].type == "file":
            dir_size += directory[item].size


with open('day07_input.txt') as f:
    terminal_list = f.read().splitlines()

# print(terminal_list)


for line in terminal_list:
    if is_command(line):
        [cmd_prefix, cmd, *arg] = line.split(" ")
        if (cmd == "cd"):
            change_pwd(arg)
        else:
            pass
    else:
        [prefix, name] = line.split(" ")
        path = generate_path(pwd, name)
        handle_ls_response(prefix, path)

solution = 0
for entry in directory:
    if directory[entry][type] == "dir":
        dir_size = find_dir_size(entry)
        if dir_size <= 100000:
            solution += dir_size

print(f"the solution is {solution}")
