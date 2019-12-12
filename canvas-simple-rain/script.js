(function() {
    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext('2d')
    const CW = canvas.clientWidth
    const CH = canvas.clientHeight

    // Raindrops
    let rains = []
    
    function draw() {
        ctx.fillStyle = '#111'
        ctx.fillRect(0, 0, CW, CH)

        drawRain()

        requestAnimationFrame(draw)
    }

    function drawRain() {
        // Looping the rains
        for (let i = 0; i < rains.length; i++) {
            ctx.fillStyle = '#fff'
            ctx.fillRect(rains[i].x, rains[i].y, 0.7, 40)

            // So that the rain water continues to trickle down
            rains[i].y += 30
        }

        // Cut an array, so it doesn't lag
        if (rains.length >= 400) rains.splice(0, 100)
    }

    function generateRain() {
        for (let i = 0; i < 200 ; i++) {
            // Make a random raindrops position using Math.floor and Math.random
            rains.push({ x: Math.floor(Math.random() * CW), y: Math.floor(Math.random() * CH) - CH })
        }
    }

    generateRain()

    // Make infinity rain using interval
    setInterval(function() { generateRain() }, 300)

    draw()
})()
