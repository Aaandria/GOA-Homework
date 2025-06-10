# 1)  მომხმარებელს შემოატანინეთ თავისი გულის ცემა გააკეთეთ პატარა გულის ცემის სისტემა რომელიც ითვლის რა თქმა უნდა გულის ცემას  თუ 180 ზე მეტია ამ შემთხვევაში მაღალია თუ 160-დან 170 მდე არის ამ შემთვევაში არის ნორმალური თუ 160-ზე ნაკლებია ამ შემთხვევაში დაბალია 

heart_rate = int(input("enter your heart rate : "))

if heart_rate >= 180 :
    print("high heart rate")
elif heart_rate < 160 :
    print("low heart rate")
else :
    print("normal heart rate")