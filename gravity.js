let cycles = 0
let zeroCrossings = 0
let lightLevel = 0
let startTime = 0
let endTime = 0
let backgroundLight = 0
let elapsedTime = 0
let counter = 0
let period = 0
input.onButtonPressed(Button.A, function () {
    counter = 0
    backgroundLight = input.lightLevel()
    startTime = 0
    zeroCrossings = 16
    cycles = Math.idiv(zeroCrossings, 2)
    basic.showString("Go")
    while (counter <= zeroCrossings) {
        lightLevel = input.lightLevel()
        if (lightLevel > backgroundLight + 50) {
            // We saw the light
            if (counter == 0) {
                // First light seen - start the clock
                startTime = input.runningTime()
            }
            // Flash display to confirm that we counted a light
            basic.showLeds(`
                . . . . .
                . . # . .
                . # # # .
                . . # . .
                . . . . .
                `)
            basic.pause(300)
            basic.clearScreen()
            counter += 1
        }
    }
    endTime = input.runningTime()
    elapsedTime = endTime - startTime
    period = Math.idiv(elapsedTime, cycles)
    basic.showString(" = = ")
    basic.showNumber(period)
})
period = 0
elapsedTime = 0
endTime = 0
lightLevel = 0
zeroCrossings = 0
cycles = 0
startTime = 0
counter = 0
backgroundLight = input.lightLevel()
