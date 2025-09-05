#5) უკვე შექმნილ Dictionary-დან, შეცვალე key ისე, რომ value იგივე დარჩეს და დაბეჭდე Dictionary საბოლოო   სახით

dic = {
    "name" : "andria",
    "surname" : "begiashvili",
    "age" : 14
}

dic ["სახელი"] = dic.pop("name")
print(dic)