# https://www.codewars.com/kata/5862f663b4e9d6f12b00003b/train/python

def guess_blue(blue_start, red_start, blue_pulled, red_pulled):
    remaining_blue = blue_start - blue_pulled
    remaining_red = red_start- red_pulled
    return remaining_blue / (remaining_blue + remaining_red)