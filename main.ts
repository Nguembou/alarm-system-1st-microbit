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
input.onGesture(Gesture.Shake, function () {
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
})
radio.setGroup(77)
basic.showIcon(IconNames.Happy)
basic.forever(function () {
	
})
