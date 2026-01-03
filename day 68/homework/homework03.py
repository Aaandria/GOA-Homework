# 4) https://www.codewars.com/kata/69347c0454f16273e13b56e8/train/python

def pick(preferred, blacklisted, options):
    choices = ['A', 'B', 'C', 'D']
    hi = []
    phi = []
    for thing in preferred:
        for item in options:
            if thing in item and thing not in blacklisted:
                hi.append(item[1])
    if hi:
        for item in options:
            if item[1] == max(hi) and item[0] in preferred:
                return choices[options.index(item)]
    for g in options:
        if g[0] not in blacklisted:
            phi.append(g[1])
    if phi:
        for item in options:
            if item[1] == max(phi) and item[0] not in blacklisted:
                return choices[options.index(item)]