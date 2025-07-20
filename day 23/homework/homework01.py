# დავალება 2 და 3: 

print("სწორი სიტყვებია რომლებიც იწყება და მთავრდება ხმოვანზე")
count = 0
while count != 5 : 
    str = input()
    if  str[0] == "a" or str[0] == "e" or str[0] == "i" or str[0] == "o" or str[0] == "u" or str[0] == "y" or str[-1] == "a" or str[-1] == "e" or str[-1] == "i" or str[-1] == "o" or str[-1] == "u" or str[-1] == "y": 
        count += 1
print(count)
         
print("good job")