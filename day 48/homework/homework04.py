# https://www.codewars.com/kata/56a4addbfd4a55694100001f/train/python

def validate_hello(greetings):
    greetings = greetings.lower()
    if "hello" in greetings:
        return True
    elif "ciao" in greetings:
        return True
    elif "salut" in greetings:
        return True
    elif "hallo" in greetings:
        return True
    elif "hola" in greetings:
        return True
    elif "ahoj" in greetings:
        return True
    elif "czesc" in greetings:
        return True
    else: 
        return False