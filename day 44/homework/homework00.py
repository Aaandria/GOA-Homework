# https://www.codewars.com/kata/5a084a098ba9146690000969/train/python

def time_convert(num):
    if num <0:
        return "00:00"
    our = num // 60
    min = num % 60
    
    if len(str(our)) < 2 :
        final_answer = "0" + str(our)
    else:
        final_answer = str(our)
    if len(str(min)) <2:
        final_answer +=f":0{str(min)}"
    else:
        final_answer += f":{str(min)}"
    return final_answer