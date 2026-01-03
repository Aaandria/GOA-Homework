# 4) https://www.codewars.com/kata/52a723508a4d96c6c90005ba/train/python

def sing(): 
    lst = []
    for i in range(97):
        lst.append(f'{99 - i} bottles of beer on the wall, {99 - i} bottles of beer.')
        lst.append(f'Take one down and pass it around, {98 - i} bottles of beer on the wall.')
    return lst + ['2 bottles of beer on the wall, 2 bottles of beer.',
                  'Take one down and pass it around, 1 bottle of beer on the wall.',
                  '1 bottle of beer on the wall, 1 bottle of beer.',
                  'Take one down and pass it around, no more bottles of beer on the wall.',
                  'No more bottles of beer on the wall, no more bottles of beer.',
                  'Go to the store and buy some more, 99 bottles of beer on the wall.']