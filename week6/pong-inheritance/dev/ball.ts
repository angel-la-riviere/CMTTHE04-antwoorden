/// <reference path="gameobject.ts" />

class Ball extends GameObject{
    // Fields 
    private speedX: number
    private speedY: number
    
    constructor() {
        super()
        this.div = document.createElement("ball")
        document.body.appendChild(this.div)
        
        this.x = window.innerWidth
        this.y = Math.random() * (window.innerHeight - 100)

        this.speedX = -3 - (Math.random() * 6)
        this.speedY = Math.random() * 6 - 3
    }
    
    public hitPaddle() : void {
        this.speedX *= -1
        this.goFaster()
    }

    public update() : void {
        super.update()

        this.x += this.speedX
        this.y += this.speedY
        
        if( this.y + this.getRectangle().height > window.innerHeight || this.y < 0) { 
            this.speedY *= -1
        }

        if (this.x > window.innerWidth) {
            this.speedX *= -1
        } 
    }

    public goFaster() {
        this.speedX *= 1.05
        this.speedY *= 1.05
    }
}