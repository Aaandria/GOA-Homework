# https://www.codewars.com/kata/5720a1cb65a504fdff0003e2/train/python

def difference_in_ages(ages):
    young = ages[0]
    old = ages[0]
    for i in ages:
        if i < young:
            young = i
        if i > old:
            old = i
    return (young, old, old - young)