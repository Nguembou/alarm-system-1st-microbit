radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 4) {
    	
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
    music.stopMelody(MelodyStopOptions.All)
})
input.onButtonPressed(Button.B, function () {
	
})
radio.setGroup(77)
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    if (input.acceleration(Dimension.Z) > 2000) {
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
