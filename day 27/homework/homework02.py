#3) შექმენით ფუნქცია, რომელსაც გადაეცემა რიცხვების სია. 
# გადაუარეთ ამ სიას while ციკლით და ჩაამატეთ გაორმაგებული რიცხვები ახალ სიაში.
#  საბოლოოდ დააბრუნეთ ეს სია

def func(lst) :
    list = []
    numbers=[]
    for i in lst :
        for u in numbers :
            if i == u :
                list.append(i)
                break
        numbers.append(i)
    return list

print (func([5,5,8,2,5,8]))
    
    