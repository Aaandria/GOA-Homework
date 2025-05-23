#  2) ახსენით რა განსხვავებაა implicit და explicit datatype comversion-ში.
# implicit არის როდესაც კომპიუტერი თავად ცვლის datatype-ს მაგლითად:
# 2 / 2 იქნება float

# explicit არის როდესაც ჩვენ თვითონ ვცვლით datatype-ს მაგალითად:
#int("20")
#bool(0)

# 4) შექმენით პროგრამა რომელიც მიიღებს მომხარებლისგან input-ს რიხვის სახით და დაბეჭდეთ ამ რიცხვამდე ყველა რიცხვი თანმიმდევრობით. (For loop)

number = int(input("enter a number : "))

for i in range (0, number + 1) :
    print(i)

# 5) გაალეთეთ მეოთხე დავალება While loop-ის გამოყენებით.

number = int(input("enter a number : "))
count = 0

while count <= number :
    print(count)
    count += 1
