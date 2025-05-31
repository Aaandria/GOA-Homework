# 1) შემოაყვანინეთ მომხმარებელს n რიცხვი და დაპრინტეთ ყველა რიცხვი ნოლიდან n+1-მდე
n = int(input("enter a number "))
for i in range (n+1) :
    print(i)

# 2) მომხმარებელს სთხოვე შეიყვანოს თავისი ასაკი და მიუთითოს, აქვს თუ არა სტუდენტური ბარათი.
# შემდეგ:
# თუ ასაკი ნაკლებია 18-ზე ან სტუდენტური ბარათი აქვს → დაბეჭდე "დანაზოგი გაქვს!"
# თუ ასაკი 60 ან მეტია და არ აქვს ბარათი → დაბეჭდე "პენსიონერის ფასდაკლება გაქვს!"
# სხვა შემთხვევაში → "ფასდაკლება არ გეკუთვნის."

age = int(input("enter your age "))
students_card = input("do u own a students card, if yes then write True, if not then False ")

if age < 18 or students_card == True :
    print("დანაზოგი გაქვს!")
if age > 60 and students_card == False :
    print("პენსიონერის ფასდაკლება გაქვს!")
else :
    print("ფასდაკლება არ გეკუთვნის.")

# 3) მომხმარებელს სთხოვე შეიყვანოს ორი რიცხვი. შემდეგ:
# თუ ორივე რიცხვი დადებითია → დაბეჭდე "ორივე დადებითია"
# თუ მხოლოდ ერთი დადებითია → "მხოლოდ ერთი დადებითი რიცხვია"
# თუ არცერთი არ არის დადებითი → "არცერთი არ არის დადებითი"

num1 = int(input("enter a number "))
num2 = int(input("enter second number "))

if num1 > 0 and num2 > 0 :
    print("ორივე რიცხვი დადებითია")
if (num1 > 0 and num2 < 0) or (num1 < 0 and num2 > 0) :
    print("მხოლოდ ერთი დადებითი რიცხვია")
if num1 < 0 and num2 < 0 :
    print("არც ერთი რიცხვი არ არის დადებითი")

# 4) მომხმარებელი შეიყვანს ორ რიცხვს და ოპერაციას (+, -, *, /)
# დაბეჭდე შედეგი შესაბამისი მოქმედებით.
# თუ ოპერაცია არასწორია (მაგ 0-ს გაყოფა ან ტექსტი ან უცხო სიმბოლო) → "არასწორი ოპერაცია!"

num1 = int(input("enter a number "))
num2 = int(input("enter a number "))
op = input("enter an operation ")
if op == "-" :
    print(num1 - num2)
elif op == "+" :
    print(num1 + num2)
elif op == "*" :
    print(num1 * num2)
elif op == "/" :
    print(num1 / num2)
else :
    print("არასწორი ოპერაცია!")



#5) შეამოწმეთ რესურსებში ჩაგდებული სურათი და მის მიხედვით დაწერეთ კომენტარებად ან პრეზენტაციაში მოქმედედების თანმიმდევრობა და საბოლოო პასუხი, ასევე როგორც ნამდვილი პითონის კოდი (შექმენით a,b,c ცვლადები, შექმენით result_0, result_1, result_2 ცვლადები და შეინახეთ თითოეულში შესაბამისი მნიშვნელობა და გამოპრინტეთ).  

a = (True and not False) or (False and not True)
#პირველშიი იქნება True რადგან მოქმედებებიდან პირველი სულ არის ფრილები შემდეგ not, შმადეგ and და ბოლოს or
#პირველი ფრჩხილში იქნება True რადგან not False იქნება True და True and True-ც იქნება True შემდეგ რადგან ფრჩხილებს შორის or წერია მეორე ფრჩხილების შემოწმება აღარ დაგვჭირდება
b = (False and False) and (True or False)
#მეორეში იქნება False რადგან False and False იქნება False და შემდეგ აღარ გვჭირდება მეტის შემოწმება რადგან and-ია ორ ფრჩხილს შორის
c = (True and not False) or (False and not True) or (False and not False)
#მესამეში იქნება True რადგან True and not False მოგვცემს True-ს რადგან not False იქნება True და True and True იქნება True ხოლო დანარჩენების შემოწმება აღარ გვჭირდება რადგან სამივე ფრჩხილს შორის წერია or

result1 = True
result2 = False
result3 = True
print(a)
print(result1)
print(b)
print(result2)
print(c)
print(result3)
