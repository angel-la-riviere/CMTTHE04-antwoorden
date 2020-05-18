class Ball {
    
    element : HTMLElement
    x : number = 0
    y : number = 0

    constructor(color: string) {
        console.log(color)
        this.element = document.createElement("ball")
        this.element.addEventListener("click", () => this.changeColor())

        let game = document.getElementsByTagName("game")[0]

        game.appendChild(this.element)

    }

    // Change color
    changeColor() {
        let color = Math.random() * 360
        this.element.style.filter = `hue-rotate(${color}deg)`
    }
    // bewegen
    move() {
        console.log("Ball is moving")

        this.x += 3
        this.y += 1

        this.element.style.transform = `translate(${this.x}px, ${this.y}px)`

    }
}