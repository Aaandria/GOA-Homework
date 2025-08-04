def func(high_numb) :
    number = 0
    for i in high_numb :
        if i > number :
            number = i
    return number

print(func([1,2,4,3]))