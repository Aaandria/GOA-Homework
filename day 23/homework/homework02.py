# დავალება 4:
word = ''
for i in range (10) :
    str = input('enter a random word ')
    if  str[0] == "a" or str[0] == "e" or str[0] == "i" or str[0] == "o" or str[0] == "u" or str[0] == "y" and str[-1] == "a" or str[-1] == "e" or str[-1] == "i" or str[-1] == "o" or str[-1] == "u" or str[-1] == "y":
        word += str + ', '
print(word)
    
