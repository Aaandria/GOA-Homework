# 5)  https://www.codewars.com/kata/53046ceefe87e4905e00072a/train/python

def palindrome(string):
    
    CleanedString = ''.join([x.upper() for x in string if x.isalnum()])

    return CleanedString == CleanedString[::-1]