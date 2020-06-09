class Alien{
    protected element : any;
    
    protected x : number = 0;
    protected y : number = 0;
    protected speed : number = 2;

    constructor(){
        this.draw();
    }

    protected draw(){
        this.element = document.createElement('alien');
        let game = document.getElementsByTagName('game')[0];
        game.appendChild(this.element);
    }

    // public getX() : number{
    //     return this.x;
    // }

    // public getY() : number{
    //     return this.y;
    // }

    // public getSpeed() : number{
    //     return this.speed;
    // }

    public setX(x : number): void{
        this.x = x;
    }

    // public setY(y : number): void{
    //     this.y = y;
    // }

    public setSpeed(speed : number): void{
        this.speed = speed;
    }

    public getElementWidth(): number{
        return this.element.clientWidth;
    }

    public getRectangle() {
        return this.element.getBoundingClientRect()
    }

    public update(): void{
        this.x += this.speed;
        this.element.style.transform = `translate(${this.x}px, ${this.y}px)`
    }
}