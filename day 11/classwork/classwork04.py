number = ""
count = 0
while count <= 100 :
    if count % 3 == 0 :
        number += str(count) + ", "
    count += 1

print(number)