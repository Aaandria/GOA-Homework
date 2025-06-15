print(1)

sistoluri_wneva = int(input("enter a poulse "))
diastoluri_wneva = int(input("enter a poulse "))

if sistoluri_wneva >= 140 or diastoluri_wneva >= 90 :
    print("high poulse")
elif sistoluri_wneva <=90 or diastoluri_wneva <=60 :
    print("low poulse")
else :
    print("normal poulse")

print(2)

age = int(input("enter your age "))
weight = int(input("enter your weight "))

if age < 10 :
    if weight < 20 :     print("low weight")
    elif weight <= 40 :     print("normal weight")
    else :    print("high weight")
elif age <= 17 :
    if weight < 40 :    print("low weight")
    elif weight <= 65 :    print("normal weight")
    else :    print("high weight")
else :
    if weight < 50 :    print("low weight")
    elif weight <= 90 :    print("normal weight")
    else :   print("high weight")

print(3)

age = int(input("enter your age "))
time = int(input("enter an hour from 0 to 23 "))

if age < 18 and time >= 22 :
    print("time to sleep")
elif age >= 60 and time >= 21 :
    print("resting is recomended")
else :
    print("you can continue working")

print(4)

age = int(input("enter your age"))
heart_rate = int(input("enter your heart rate "))

if age < 30 and heart_rate < 140 :
    print("შეგიძლიათ მეტი ივარჯიშოთ")
elif age >= 30 and heart_rate > 170 :
    print("დასვენება გჭირდებათ")
else :
    print("აქტივობის დონე ნორმალურია")

print(5)

age = int(input("enter your age "))

if age <= 12 :
    print("ბევრი ვიტამინიანი საკვები")
elif age <= 25 :
    print("ენერგიის მომცემი საკვები")
elif age <= 59 :
    print("ბალანსირებული რაციონი")
else :
    print("დაბალკალორიული და მსუბუქი საკვები")