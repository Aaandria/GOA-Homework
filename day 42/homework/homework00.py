# https://www.codewars.com/kata/59cd0535328801336e000649/train/python

def interest(p, r, n):
    a = round(p * (1 + r * n))
    b = round(p * (1 + r) ** n)
    return [a, b]