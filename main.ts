let haloDisplay = kitronik_halo_hd.createZIPHaloDisplay(60)
basic.forever(function () {
    haloDisplay.showRainbow(1, 360)
    haloDisplay.rotate(1)
})
