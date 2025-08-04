def func(numbers) :
    sum = 0
    for i in numbers :
        if i % 2 == 0 :
            sum += i
    return sum

print(func([2,3,4,6,8]))