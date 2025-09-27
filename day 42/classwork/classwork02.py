# https://www.codewars.com/kata/58bf9bd943fadb2a980000a7/train/python

def who_is_paying(name):
    lst = []
    lst.append(name)
    if len(name) <= 2:
        return lst
    else:
        first_two = ""
        new_lst = []
        for i in name:
            new_lst.append(i)
        first_two =new_lst[0]
        first_two += new_lst[1]
        lst.append(first_two)
        return lst