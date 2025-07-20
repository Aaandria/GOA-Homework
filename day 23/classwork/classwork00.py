#1) მომხმარებელს შემოატანეთ ინფუთი სანამ პირველი და ბოლო ასო ინფუთის არ იქნება თანხმოვანი 

str = input("enter a word ")

while str[0] == "a" or str[0] == "e" or str[0] == "i" or str[0] == "o" or str[0] == "u" or str[0] == "y" or str[-1] == "a" or str[-1] == "e" or str[-1] == "i" or str[-1] == "o" or str[-1] == "u" or str[-1] == "y":
    print("try again")
    str = input("again ")
print("good job")