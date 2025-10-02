# https://www.codewars.com/kata/5b6d065a1db5ce9b4c00003c/train/python

def dropzone(fire, dropzones):
    fx, fy = fire
    closest = None
    min_dist = float("inf")
    
    for dz in dropzones:
        dx, dy = dz
        dist = (fx - dx)**2 + (fy - dy)**2 
        if dist < min_dist:
            min_dist = dist
            closest = dz
    return closest