# https://www.codewars.com/kata/68be9f8256132dcf53eb1e6e/train/python

def split_string(st):
    last_occurrence = {}
    n = len(st)
    for i, char in enumerate(st):
        last_occurrence[char] = i
        
    result = []
    start = 0
    end = 0
    for i in range(n):
        end = max(end, last_occurrence[st[i]])
        if i == end:
            result.append(end - start + 1)
            start = i + 1
    return result