class Game {
    
    private gameobjects : GameObject[] = []

    constructor() {
        // Stop de Paddle en de Ball objecten in 
        // één en dezelfde array van type GameObject
        this.gameobjects.push(new Paddle(20, 87, 83))

        for (var i = 0; i < 5; i++) {
            this.gameobjects.push(new Ball())
            // this.balls.push(new Ball())
        }

        this.gameloop()        
    }

    public gameloop(): void {
        // Doorloop alle game-objecten
        for (const gameobject of this.gameobjects) {
            // update elk game-object. Dit kan dus een Ball
            // of een Paddle zijn
            gameobject.update()

            // Check of het huidige gameobject in de loop een Paddle is
            if(gameobject instanceof Paddle) {
                // gameobject == Paddle
                
                // check if paddle hits a ball object
                for (const ball of this.gameobjects) {
                    // Check of het huidige gameobject in de loop een Ball is
                    if(ball instanceof Ball) {

                        if (this.checkCollision(ball.getRectangle(), gameobject.getRectangle())) {
                            ball.hitPaddle()
                        }

                    }
                }
            }
            
        }

        requestAnimationFrame(() => this.gameloop())
    }

    private checkCollision(a: ClientRect, b: ClientRect) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom)
    }
    
} 

window.addEventListener("load", () => new Game())