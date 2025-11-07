# https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/python

def get_count(sentence):
    count = 0
    vowels = "aeiou"
    for i in sentence:
        for o in vowels:
            if i == o:
                count += 1
    return count