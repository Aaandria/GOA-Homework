even =""
odd =""

for i in range (1, 101, 1) :
    if i % 2 == 0 :
        even += ", " + str(i)
    if i % 2 != 0 :
        odd += ", " + str(i)
print(even)
print(odd)