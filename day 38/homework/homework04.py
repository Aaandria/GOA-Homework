# 5)https://www.codewars.com/kata/5810085c533d69f4980001cf

def calculator(x, y, op):
    if type(x) != int and type(x) != float or type(y) != int and type(y) != float:
        return "unknown value"
    if op == "-":
        return x - y
    elif op == "+":
        return x + y
    elif op == "*":
        return x * y
    elif op == "/":
        return x / y
    else:
        return "unknown value"