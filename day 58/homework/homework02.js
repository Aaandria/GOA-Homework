// 3. თუ ასაკი < 13 → "child", თუ 13–17 → "teen", სხვა შემთხვევაში "adult".

let age = Number(prompt("enter your age"))

if (age<13){
    alert("child")
} else if(age <=17){
    alert("teen")
} else{
    alert("adult")
}