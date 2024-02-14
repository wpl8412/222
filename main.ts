let strip = neopixel.create(DigitalPin.P2, 10000, NeoPixelMode.RGB)
basic.forever(function () {
    strip.showRainbow(1, 1e+26)
})
