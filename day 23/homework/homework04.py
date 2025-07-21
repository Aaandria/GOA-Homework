# დავალება 5:

vowels = "აეიოუ"
nonvowels = "ბგდვზთკლმნპჟრსტფქღყშცჩძწჭხჯჰ"

while True :
    word = input("შეიყვანე სიტყვა ")

    count0 = 0
    count1 = 0

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
    
    if fil == False and lal == False :
        print("მართალი ხარ")
    else :
        for i in vowels :
            for u in word :
                if u == i :
                    count0 += 1
        for i in nonvowels :
            for u in word :
                if u == i :
                    count1 += 1
        print(f"შენი თანხმოვნების რაოდენობაა {count1}, ხოლო ხმოვნების {count0}")