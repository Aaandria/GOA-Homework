# დავალება 3:

vowels = "აეიოუ"
count = 0

while True :
    word = input("შეიყვანე სიტყვა ")

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
        print("მართალი ხარ")
        break
    else :
        print("თავიდან ცადე")
        count += 1
print(f"შენი ცდებია {count}")        

    
