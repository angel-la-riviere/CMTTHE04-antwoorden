/// <reference path="chicken.ts" />

class Tree {
    
    private _div: HTMLElement
    private x:number
    private y:number
    private speed:number

    private chickens : Chicken[] = []

    // Properties
    public get div(): HTMLElement { return this._div }

    constructor(x:number, y:number, g : Game) {
        this._div = document.createElement("tree")
        let game = document.getElementsByTagName("game")[0]
        game.appendChild(this._div)
        
        this.speed = Math.random() * 4 + 1
        this.x = x
        this.y = y

        // dit vlot heeft kippen nodig !
        // ...
        for (let i = 0; i < Math.random() * 4; i++) {
            this.chickens.push(new Chicken(i * 100 + 20, -70, this, g))
            
        }
    }
    
    public move():void {
        this.x += this.speed
        if(this.x > window.innerWidth) this.x = -450
        this._div.style.transform = `translate(${this.x}px, ${this.y}px)`
    }

}