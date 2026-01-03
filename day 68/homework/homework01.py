# 2) https://www.codewars.com/kata/56f3f6a82010832b02000f38/train/python

def describe_age(a):
    return f"You're a(n) {'kid'if a<=12 else'teenager'if a<=17 else'adult'if a<=64 else'elderly'}"