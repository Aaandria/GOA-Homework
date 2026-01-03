# 3) https://www.codewars.com/kata/5822d89270ca28c85c0000f3/train/python

def scramble(strng, array):
    return "".join(strng[array.index(x)] for x in range(len(strng)))