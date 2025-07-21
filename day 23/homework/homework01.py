# დავალება 2 : 

lst = []

vowels = "აეიოუ"

for i in range (5) :
    word = input("შეიყვანე სწორი სიტყვა, სწორი სიტყვაა რომელიც იწყება და მთავრდება თანხმოვნით ")

    Fl = word[0]
    ll = word[-1]

    Fil = False
    for i in vowels :
        if Fl == i :
            Fil = True
            break
    lal = False
    for i in vowels :
        if ll == i :
            lal = True
            break
    if Fil == False and lal == False :
        lst.append(word)

print(lst)