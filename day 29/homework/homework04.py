#5) შექმენით ფუნქცია, რომელსაც გადაეცემა წინადადება. თქვენი დავალებაა ამ წინადადების სიტყვები
#  შეაბრუნოთ და დააბრუნოთ(სიტყვების სიმბოლოები არ უნდა იყოს შებრუნებული) 

def func(word):
    lst = []
    words = ""
    for i in word:
        if i != " ":
            words += i
        else:
            lst.append(words)
            words = ""
    reverse_lst = lst[: : -1]
    new_sentance = ""
    for i in reverse_lst:
        new_sentance += i + " "
    return new_sentance

print(func("hello my name is andria "))