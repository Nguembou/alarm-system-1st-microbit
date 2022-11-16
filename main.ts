radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 4) {
        basic.showIcon(IconNames.Happy)
        music.stopMelody(MelodyStopOptions.All)
    }
})
input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
radio.setGroup(77)
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    if (input.acceleration(Dimension.Z) > 432 || input.acceleration(Dimension.Z) < -432) {
        radio.sendNumber(2)
        basic.showLeds(`
            . # # # .
            # # . . #
            # . # . #
            # . . # #
            . # # # .
            `)
        music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Forever)
        basic.pause(100)
    }
})
