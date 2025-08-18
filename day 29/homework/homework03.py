#4) შექმენით ფუნქცია, რომელიც იღებს წინადადებას, და მასში space-ების მაგივრად სიტყვებს შორის ჩასვამს ტირეს("-").
#  საბოლოოდ კი აბრუნებს მას

def func(word):
    lst = []
    new_word = ""
    for i in word:
        if i != " ":
            new_word += i
        else:
            lst.append(new_word)
            new_word = ""
    new_sentance = ""
    for i in lst:
        new_sentance += i + "-"
    return new_sentance

print(func("hello my name is andria "))