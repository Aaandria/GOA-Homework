#1) შექმენით ფუნქცია, რომელიც მიიღებს წინადადებას, ფუნქციამ ამ წინადადების თითოეული სიტყვა უნდა შეინახოს სიაში, 
# როგორც ცალკე ელემენტი. საბოლოოდ გადააქციეთ სია ისევ წინადადებად, სადაც სიტყვებს შორის არის მძიმე და ერთი დაშორება(", ")

def func(words):
    lst = []
    lst_words = ""
    for i in words:
        if i != " ":
            lst_words += i
        else:
            lst.append(lst_words)
            lst_words = ""
    new_sentance = ""
    for i in lst :
        new_sentance += i + ", "
    return new_sentance

print(func("Hello My Name Is andria "))