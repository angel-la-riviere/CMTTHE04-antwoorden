class Game{
    private leftAlien : Alien;
    private rightAlien : Alien;

    constructor(){
        this.leftAlien = new Alien();
        this.rightAlien = new SpecialAlien();

        this.rightAlien.setX(window.innerWidth - this.rightAlien.getElementWidth());
        this.rightAlien.setSpeed(-2);

        this.gameLoop();
    }

    private gameLoop(){
        this.leftAlien.update();
        this.rightAlien.update();

        let hit = this.checkCollision(
            this.leftAlien.getRectangle(),
            this.rightAlien.getRectangle()
        );
        if(hit == true){
            this.leftAlien.setSpeed(0);
            this.rightAlien.setSpeed(0);
        }
        console.log(hit);

        requestAnimationFrame(() => this.gameLoop())
    }

    private checkCollision(a: ClientRect, b: ClientRect) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom)
     }
}