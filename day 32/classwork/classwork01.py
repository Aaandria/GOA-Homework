# 2)შექენით სეტები და განიხილეთ ოპერატორები (union,intersection,difference,symmetric_difference,clear,add,remove)
#  ახსენით ასევე კომენტარებით და გააკეთეთ ორივე ხერხით როგორც ტექსტიტ ისე სიმბოლოთი.

set_A = {1,2,3}
set_B = {3,4,5}

union = set_A | set_B   #აერთიანებს სეტებს
intersection = set_A & set_B   #აბრუნებს სეტების მსგავსებას
difference = set_A - set_B    #აბრუნებს სეტების განსხვავებას
symmetric_difference = set_A ^ set_B    #აერთიანებს სეტების განსხვავებულ ელემენტებს
clear = set_A.clear()     #ასუფთავებს სეტს
add = set_A.add(4)     #სეტში ამატებს ელემენტს