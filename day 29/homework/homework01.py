#2) შექმენით ფუნქცია, რომელიც მიიღებს წინადადებას და დაბეჭდავს მის თითოეულ სიტყვაში სიმბოლოების რაოდენობას(ცალ-ცალკე)

def func(words) :
    lst = []
    new_word = ""
    for i in words:
        if i != " ":
            new_word += i
        else:
            lst.append(new_word)
            new_word = ""
    for i in lst :
        word_len = len(i)
        print(f"{i} in this word there is {word_len} symbols")
        

print(func("Hello my name is andria "))