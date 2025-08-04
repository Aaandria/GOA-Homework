#1)classwork: შექმენით ფუნქცა რომელიც იღებს წინადადებას და აბრუნებ რამდენი სიტყვაა მასში.

def func(words) :
    count = 1
    u = " "
    for i in words :
        if i == u :
            count += 1
    return count

print(func("hello my name is Andria"))

