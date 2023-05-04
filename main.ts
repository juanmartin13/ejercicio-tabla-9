let variable9 = 0
let variable1 = 0
input.onButtonPressed(Button.A, function () {
    variable9 = 9
    basic.showNumber(variable9)
    variable1 = randint(0, 10)
    basic.showNumber(variable1)
    basic.showNumber(variable1 * variable9)
})
