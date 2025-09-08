# 1)https://www.codewars.com/kata/582cb0224e56e068d800003c

def litres(time):
    hydration = 0
    if time < 2:
        return hydration
    else:
        while time >= 2:
            hydration += 1
            time -= 2
        return hydration