#   1)დაწერე პროგრამა, რომელიც while ციკლით დაბეჭდავს რიცხვებს 1-დან 10-მდე
count = 0
while count < 10 :
    count = count + 1
    print(count)


#   2)დაწერე პროგრამა, რომელიც დაბეჭდავს რიცხვებს 10-დან 1-მდე
count = 11

while count > 1 :
    count = count - 1
    print(count)


#   3)კომენტარებით ახსენი while loop
# while loop არის ifelse-ის მსგავსი მაგრამ ifelse-ისგან განსხვავებით კოდს იქამდე იმეორებს სანამ False არ იქნება.


#   4)დაწერე პროგრამა, რომელიც სთხოვს მომხმარებელს პაროლის შეყვანას. სწორი პაროლია "python123".
# სანამ სწორად არ შეიყვანს, მოთხოვე თავიდან.

password = "python123"
your_password = input("enter a password ")
while your_password != password :
    your_password = input("enter your password again ")


#   5)მომხმარებელმა უნდა შეიყვანოს რიცხვი n. პროგრამამ while ციკლით უნდა დაითვალოს 1-დან n-მდე რიცხვების ჯამი.

number =int(input("enter a number "))
starting_number = 1
sum = 0
while starting_number < number :
    starting_number += 1
    sum +=starting_number + 1

print(sum)
    
    

