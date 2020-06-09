/// <reference path="tree.ts"/>

class Game {
    // Fields    
    private trees:Tree[] = []
    private bullets:Bullet[] = []

    public addBullet(bullet : Bullet) {
        this.bullets.push(bullet)
    }

    constructor() {
        // de game heeft trees nodig
        for (let i = 0; i < 4; i++) {
            this.trees.push(new Tree(-100, i * 250 + 100, this))
        }

        // start de game loop
        this.gameLoop()
    }
    
    private gameLoop(){
        // gebruik een for..of loop om de move functie van alle trees in de array aan te roepen
        for (const tree of this.trees) {
            tree.move()
        }
        for (const bullet of this.bullets) {
            bullet.move()
        }
                
        // animation
        requestAnimationFrame(() => this.gameLoop())
    }
} 

window.addEventListener("load", () => new Game())