input.onButtonPressed(Button.A, function () {
    COZIR2 = Math.round(COZIR.Co2())
    basic.showNumber(COZIR2)
    basic.showString(" PPM")
})
input.onButtonPressed(Button.AB, function () {
    COZIR2 = Math.round(COZIR.relativeHumidity())
    basic.showNumber(COZIR2)
    basic.showString(" %HR")
})
input.onButtonPressed(Button.B, function () {
    COZIR2 = Math.round(COZIR.temperature())
    basic.showNumber(COZIR2)
    basic.showString(" C")
})
radio.onReceivedStringDeprecated(function (receivedString) {
    if (receivedString == "A") {
        COZIR2 = Math.round(COZIR.Co2())
        radio.sendValue(" PPM", COZIR2)
    } else if (receivedString == "B") {
        COZIR2 = Math.round(COZIR.temperature())
        radio.sendValue(" C", COZIR2)
    } else if (receivedString == "AB") {
        COZIR2 = Math.round(COZIR.relativeHumidity())
        radio.sendValue(" %RH", COZIR2)
    }
})
let COZIR2 = 0
radio.setGroup(1)
serial.redirect(
SerialPin.P0,
SerialPin.P1,
BaudRate.BaudRate9600
)
basic.forever(function () {
    while (!(input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B))) {
        basic.pause(60000)
        basic.showString("" + Math.round(COZIR.Co2()) + " PPM")
        radio.sendValue(" PPM", COZIR2)
        basic.pause(100)
        basic.showString("" + Math.round(COZIR.temperature()) + " C")
        radio.sendValue(" C", COZIR2)
        basic.pause(100)
        basic.showString("" + Math.round(COZIR.relativeHumidity()) + " %HR")
        radio.sendValue(" %HR", COZIR2)
    }
})
