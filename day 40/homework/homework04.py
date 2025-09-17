# https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/python 

def get_count(sentence):
    wovels = "aeiou"
    count = 0
    for i in wovels:
        for u in sentence:
            if i == u:
                count += 1
    return count