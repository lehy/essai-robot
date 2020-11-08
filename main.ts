let suit1 = 0
motor.servo(motor.Servos.S1, 50)
basic.pause(5000)
basic.forever(function () {
    motor.servo(motor.Servos.S1, 0)
    basic.pause(500)
    if (pins.analogReadPin(AnalogPin.P0) < 530) {
        suit1 = 1
    }
    motor.servo(motor.Servos.S1, 100)
    basic.pause(500)
    if (pins.analogReadPin(AnalogPin.P0) < 530) {
        suit1 = 2
    }
    motor.servo(motor.Servos.S1, 50)
    basic.pause(500)
    if (pins.analogReadPin(AnalogPin.P0) < 530) {
        suit1 = 3
    }
    if (suit1 == 1) {
        basic.showLeds(`
            . . # . .
            . . # # .
            # # # . #
            . . # # .
            . . # . .
            `)
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (suit1 == 2) {
        basic.showLeds(`
            . . # . .
            . # # . .
            # . # # #
            . # # . .
            . . # . .
            `)
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (suit1 == 3) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . # . # .
            . . # . .
            `)
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            . . # . .
            . # . # .
            # # # # #
            . . # . .
            . . # . .
            `)
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
