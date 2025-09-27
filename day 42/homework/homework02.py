# https://www.codewars.com/kata/5497a3c181dd7291ce000700/train/python

def diagonal_sum(array):
    s = 0
    for i in range(len(array)):
        s += array[i][i]
    return s