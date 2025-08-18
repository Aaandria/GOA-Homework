#3)შექმენი სეტი fruit1 და fruit2 შეინახეტ სხვადასხვა ხილები და გააკეთეთ ყველა მანიპულაცია რაც გახსენდებათ
#  ოპერატორების დახმარებით, შემდეგ ახხსენით კომენტარებით.

fruit1 = {"apple", "banana"}
fruit2 = {"pear", "grape"}

union = fruit1 | fruit2  #აერთიანებს სეტებს
intersection = fruit1 & fruit2  #აბრუნებს სეტების მსგავსებას
difference = fruit1 - fruit2    #აბრუნებს სეტების განსხვავებას
symmetric_difference = fruit1 ^ fruit2   #აერთიანებს სეტების განსხვავებულ ელემენტებს
clear = fruit1.clear()     #ასუფთავებს სეტს
add = fruit2.add(4)     #სეტში ამატებს ელემენტს
remove = fruit1.remove("apple")

