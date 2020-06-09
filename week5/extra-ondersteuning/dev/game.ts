class Game{
    /**
     * Array of alien objects
     */
    private aliens : Alien[] = [];

    /**
     * Runs when Game is created
     * Start with one alien
     */
    constructor(){
        // start with one alien
        this.aliens.push(new Alien());

        // run gameloop
        this.gameLoop();
    }

    /**
     * Get all scores of aliens
     */
    public getScore() : number{
        let score = 0;
        for (const alien of this.aliens) {
            score  += alien.getScore();
        }
        return score;
    }

    /**
     * Gameloop
     */
    public gameLoop(){
        // foreach alien in aliens
        for (const alien of this.aliens) {
            // run public update function
            alien.update();
            // log current alien score
            console.log(alien.getScore());
        }

        requestAnimationFrame(() => this.gameLoop());
    }
}

/**
 * On window load, create a game
 */
window.addEventListener("load", () => new Game());