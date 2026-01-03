# 5) https://www.codewars.com/kata/5813d19765d81c592200001a/train/python

def dont_give_me_five(start,end):
    tick = 0
    for x in range(start, end+1):
        if '5' not in str(x):
            tick += 1
    return tick