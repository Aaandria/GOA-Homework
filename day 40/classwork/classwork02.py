# https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/python

def digitize(n):
    n=str(n)
    new = n[::-1]
    lst = []
    for i in new:
        lst.append(int(i))
    return lst