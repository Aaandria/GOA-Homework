#დავალება 1: შეიყვანე სიტყვა, სანამ პირველი და ბოლო ასო არ იქნება თანხმოვანი

vowels = "აეიოუ"

while True :
    word = input("შეიყვანეთ სიტყვა ")

    Fl = word[0]
    Ll = word[-1]

    Fil = False
    for i in vowels :
        if Fl == i :
            Fil = True
            break
    
    Lal = False
    for i in vowels :
        if Ll == i :
            Lal = True
            break
    
    if Lal == False and Fil == False :
        print('მართალი ხარ')
        break
    else :
        print("თავიდან ცადე")