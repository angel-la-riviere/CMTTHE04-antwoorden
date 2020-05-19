class Game {
    private numberOfElements: number = 10
        
    constructor() {
        console.log("Game was created!")

        for (let i = 0; i < this.numberOfElements; i++) {
            new Fish()
            new Bubble()
        }
    }
} 

window.addEventListener("load", () => new Game())