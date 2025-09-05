#6) dictionary ფასებით:

products = {
    "apple": 3,
    "banana": 2,
    "milk": 5
}


#დაბეჭდე ყველა პროდუქტი for loop-ით.

#მომხმარებლისგან შეიყვანე პროდუქტი, თუ არსებობს → დაბეჭდე ფასი.

#დაამატე ახალი პროდუქტი update()-ით.

#ბოლოს გამოიყენე clear() ჩასაშენებლად, მაგალითად, ცარიელი dictionary-ს დაბეჭდვა დასუფთავების შემდეგ.

for i in products:
    print(i) 

word = input("enter one of the products: ")

for items, price in products.items():
    if word == items:
        print(f"price is {price}")

products.clear()
print(products)