# https://www.codewars.com/kata/554b4ac871d6813a03000035/train/python

def high_and_low(numbers):
    num = numbers.split()
    low = int(num[0])
    high = int(num[0])
    for i in num:
        if int(i) > high:
            high = int(i)
        if int(i) < low:
            low = int(i)
    return f"{high} {low}"