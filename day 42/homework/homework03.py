# https://www.codewars.com/kata/55d24f55d7dd296eb9000030/train/python

def summation(num):
    sum = 0
    while num != 0:
        sum += num
        num -= 1
    return sum