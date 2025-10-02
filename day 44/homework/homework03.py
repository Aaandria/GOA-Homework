#https://www.codewars.com/kata/56069d0c4af7f633910000d3/train/python

def search(budget, prices):
    if len(prices) == 0:
        return ""
    stores = []
    for i in prices:
        if budget >= i:
            stores.append(i)
    if len(stores) == 0:
        return ""
    stores.sort()
    final = ""
    for i in stores:
        final += str(i) + ","
    return final[0:-1]