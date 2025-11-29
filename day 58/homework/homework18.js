// 19. while ციკლით მოძებნე პირველი რიცხვი, რომელიც იყოფა 9-ზე.

let i = 1

while(true){
    if(i%9 == 0){
        console.log(i)
        break
    }
    i++
}