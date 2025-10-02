# https://www.codewars.com/kata/5fc4349ddb878a0017838d0f/train/python

def red_knight(N, P):
    if (N + P) % 2 == 0:
        return ("White", 2 * P)
    else:
        return ("Black", 2 * P)