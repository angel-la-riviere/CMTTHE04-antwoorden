class Alien{
    private element : HTMLElement;
    private x : number = 1;
    private y : number = 0;

    /**
     * Is element moving to the right?
     * If false: it is moving to the left
     */
    private toRight : boolean = true;

    /**
     * The number of pixels added or redacted from x
     */
    private speedX : number = 1;

    /**
     * Number of times (iterations) item has touched the right border
     */
    private bouncedRight : number = 0;

    /**
     * Score of current alien
     * Added later
     */
    private score : number = 0;

    /**
     * Runs when alien is created
     * Initializes HTML element
     */
    constructor(){
        this.element = document.createElement("alien");
        let gameObject = document.getElementsByTagName("game")[0];
        gameObject.appendChild(this.element);
    }

    /**
     * Is run in game loop
     */
    public update(){
        // if element has touched right at least one time (pause)
        if(this.bouncedRight > 0){
            this.bouncedRight++;
            // if element has touched the border enough (stop pause)
            if(this.bouncedRight == 100){
                this.bouncedRight = 0;
            }
        }else{
            // if element touches right border
            if(this.x == (window.innerWidth - this.element.clientWidth)){
                this.bounceRight();
            // if element touches left border
            }else if(this.x == 0){
                this.bounceLeft();
            }

            // move to the right
            if(this.toRight){
                this.x += this.speedX;
            // move to the left
            }else{
                this.x -= this.speedX;
            }
        }

        // update style attribute of element
        this.element.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }

    /**
     * function run when item touches right border
     */
    private bounceRight(){
        this.toRight = false;
        this.bouncedRight++;
    }

    /**
     * function run when item touches left border
     */
    private bounceLeft(){
        this.toRight = true;
        this.score++;
    }

    /**
     * Return current score
     * Added later
     */
    public getScore(){
        return this.score;
    }
}