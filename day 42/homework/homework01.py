# https://www.codewars.com/kata/54e9554c92ad5650fe00022b/train/python

def to_currency(price):
    p = str(price)
    if len(p) <= 3:
        return p
    elif len(p) % 3 == 0:
        count = 1
        new = ""
        for i in p:
            new += i
            if count % 3 == 0:
                new += ","
            count += 1
        return new[0:-1]
    else:
        n = p[::-1]
        cout = 1
        new = ""
        for i in n:
            new += i
            if cout % 3 == 0:
                new +=","
            cout += 1
        f = new[::-1]
        return f