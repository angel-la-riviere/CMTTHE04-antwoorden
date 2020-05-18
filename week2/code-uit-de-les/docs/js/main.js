class Ball {
    constructor(color) {
        this.x = 0;
        this.y = 0;
        console.log(color);
        this.element = document.createElement("ball");
        this.element.addEventListener("click", () => this.changeColor());
        let game = document.getElementsByTagName("game")[0];
        game.appendChild(this.element);
    }
    changeColor() {
        let color = Math.random() * 360;
        this.element.style.filter = `hue-rotate(${color}deg)`;
    }
    move() {
        console.log("Ball is moving");
        this.x += 3;
        this.y += 1;
        this.element.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
}
class Game {
    constructor() {
        console.log("Game created!");
        this.ball = new Ball("Red");
        this.ball2 = new Ball("Green");
        this.gameLoop();
    }
    gameLoop() {
        this.ball.move();
        this.ball2.move();
        requestAnimationFrame(() => this.gameLoop());
    }
}
window.addEventListener("load", () => new Game());
//# sourceMappingURL=main.js.map