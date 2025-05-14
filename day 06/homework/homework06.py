# 2)
    # sequences არის თანმიმდევრობა რასაც მიყვება კოდი. მაგალითად თუ პირველ ხაზზე წერია print(andria) ხოლო მეორე ხაზზე print(begiashvili) ჯერ andria დაიწერება შემდეგ begiashvili.
    # iterations იმეორებს ერთი და იგივე პროცესს იქამდე სანამ მოცემული პირობა არ შესრულდება. მაგალითად თუ ჩვენ მომხმარებელს მოვთხოვთ რომ ქულები დააგროვოს და თუ ქულები 100ზე ნაკლები იქნება თავიდან დაიწყოს.
    #selections არის როდესაც კოდი იყოფა ნაწილებად ifelse-ბის დახმარებით. მადალითად თუ პასუხი იქნება True დაიპრიწნტება winner ხოლო თუ პასუხი იქნება False ისევ მოთხოვს თავიდან ჩაწერას.

# 3)
    #ალგორითმი არის რაიმე პროცესის ნაბიჯ-ნაბიჯ გაკეთება. ალგორითმის ერთი წარმოსადგენი გზა არის flowchart, მეორე გზა არის pseudocode, ხოლო მესამე natural language.

# 4)
print(True or False and False or True and False or False and False or False and True and False or True)    
#  True

print(5 > 10 or 7 * 7 / 7 == 7 and False or True and "1234" != "1234" and 7 + 3 * 3 + 1 == 15 and True and True or 100 > 100 or True)  
# True

# 5)
number = int(input("please enter a number: " ))

if number % 2 == 0 and number > 10 or number == 7 :
    print(True)

# 6)
    #int
num1 =int("130")
num2 = int(23.0)
num3 = int("3")

    #str
str1 = str(123)
str2 = str(True)
str3 = str(3.05)

    #float
float1 = float(14)
float2 = float("13")
float3 = float("23.33")

    #bool
bool1 = bool("True")
bool2 = bool("False")
bool3 = bool(False and True)

# 7)
year = int(input("pleaase enter an year : "))

if year % 4 == 0 and year % 100 != 0 or year % 400 == 0 :
    print("This is leap year")