#5)შექმენით tuple სადაც შეინახავთ სიტყვებს შემდეგ დაწერე პროგრამა, რომელიც დაითვლის, რამდენჯერ მეორდება რომელიმე სიტყვა ტაპლში.

A = ("hello", "world", "hello")
count0 = 0
count1 = 0
for i in A:
    if i == "hello":
        count0 += 1
    elif i == "world":
        count1 += 1
print(f"word_hello in ur touple is {count0} times")
print(f"word_world in ur touple is {count1} times")