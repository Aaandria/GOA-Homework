# 3)https://www.codewars.com/kata/55a2d7ebe362935a210000b2

def find_smallest_int(arr):
    smallest_int = arr[0]
    for i in arr:
        if i < smallest_int:
            smallest_int = i
    return smallest_int