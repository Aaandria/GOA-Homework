# დავალება 4:

vowels = "აეიოუ"

for i in range (10) :
    word = input("შეიყვანეთ სიტყვა ")
    fl = word[0]
    ll = word[-1]
    fil = False
    lal = False

    for i in vowels :
        if fl == i :
            fil = True
            break
    for i in vowels :
        if ll == i :
            lal = True
            break
    if fil == False and lal == False :
        print(word)