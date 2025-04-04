from turtle import *
speed(30)
width(7)
#drawing a square
color("purple")
forward(200)
left(90)
forward(200)
left(90)
forward(200)
left(90)
forward(200)
left(90)
forward(70)
#end of square

#drawing a door
color("yellow")
begin_fill()
left(90)
forward(120)         #height of door
right(90)
forward(60)
right(90)
forward(120)
end_fill()
#end of door

#drawing roof
penup()
goto(200, 200)
pendown
color("red")
begin_fill()
right(150)
forward(200)
left(120)
forward(200)
left(50)
end_fill()

#drawing windows
penup()
goto(0, 200)
pendown()
color("cyan")
begin_fill()
left(70)
forward(70)
right(90)
forward(70)
right(90)
forward(70)
right(90)
forward(70)
end_fill()

penup()
goto(200, 200)
pendown()
begin_fill()
right(180)
forward(70)
right(90)
forward(70)
right(90)
forward(70)
right(90)
forward(70)
end_fill()

#end of windows

exitonclick()
