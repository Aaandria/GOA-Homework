# https://www.codewars.com/kata/68b0064510c5854a66e6323a/train/python

def maximum_seating(lst):
    count = 0
    n = len(lst)
    i = 0
    while i < n:
        if lst[i] == 0:
            if i < 2:
                if sum (lst [:i+3]) == 0:
                    lst [i] = 1
                    count += 1
                    i += 1
                else:
                    i += 1
            elif i > n-2:
                if sum (lst [i-2:]) == 0:
                    lst [i] = 1
                    count += 1
                else:
                    return count
            else:
                if sum (lst [i-2:i+3]) == 0:
                    lst [i] = 1
                    count += 1
                    i += 1
                else:
                    i += 1
        else:
            i += 1
    return count