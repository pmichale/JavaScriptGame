const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 64 * 16
canvas.height = 64 * 9

c.fillStyle = 'white'
c.fillRect(0, 0, canvas.width, canvas.height)

class Player {
    constructor() {
        this.position = {
            x: 100,
            y: 100,
        }

        this.width = 100
        this.height = 100
        this.edges = {
            bottom: this.position.y + this.height
        }
    }

    draw() {
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update() {
        if (this.edges.bottom < canvas.height) {
            this.position.y++
            this.edges.bottom = this.position.y + this.height
        }
    }
}

const player = new Player()


//let bottom = y + height
function animate() {
    window.requestAnimationFrame(animate) 
    c.fillStyle = 'white'
    c.fillRect(0, 0, canvas.width, canvas.height)
    player.draw()
    player.update()
}

animate()