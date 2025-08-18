#3) შექმენით ფუნქცია, რომელიც იღებს წინადადებას, სადაც ყოველი სიტყვის შორის ერთზე მეტი დაშორებაა(space). 
# თქვენი დავალებაა ჩამოაშოროთ გადმოცემულ წინადადებას ზედმეტი space-ები(სიტყვებს შორის მხოლოდ ერთი უნდა იყოს). 
# საბოლოოდ დააბრუნეთ ეს წინადადება

def func(words):
    lst = []
    new_words = ""
    for i in words:
        if i != " ":
            new_words += i
        else:
            lst.append(new_words)
            new_words = ""
    new_sentance = ""
    for i in lst :
        if len(i) > 0 :
            new_sentance += i
    return new_sentance

print("hello  my  name  is   andria  ")