input.onButtonPressed(Button.A, function () {
    basic.showString("b")
    basic.showNumber(11 - 9)
})
input.onGesture(Gesture.LogoUp, function () {
    basic.showString("e")
    basic.showNumber(10 % 4)
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showString("i")
    basic.showNumber(5 ** 3)
})
input.onGesture(Gesture.ScreenUp, function () {
    basic.showString("f")
    basic.showNumber(Math.sqrt(67))
})
input.onGesture(Gesture.ScreenDown, function () {
    basic.showString("g")
    basic.showNumber(Math.round(0.75))
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("d")
    basic.showNumber(9 / 3)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("c")
    basic.showNumber(3 ** 2)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("A ")
    basic.showNumber(3 + 9)
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showString("j")
    basic.showNumber(randint(0, 100))
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showString("h")
    basic.showNumber(Math.ceil(0.333))
})
let j = 0
let a = 0
let b = 0
let c = 0
let d = 0
let e = 0
let f = 0
let g = 0
let h = 0
let i = 0
