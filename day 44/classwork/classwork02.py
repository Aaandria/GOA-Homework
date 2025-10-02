# https://www.codewars.com/kata/580a0347430590220e000091/train/python

def area(d, l): 
    if d <= l:
        return 'Not a rectangle'
    w = (d**2 - l**2)**(1/2)
    area = l*w
    return round(area, 2)