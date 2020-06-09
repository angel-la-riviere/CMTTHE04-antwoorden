/// <reference path="tree.ts"/>

class Chicken {
    // Fields
    private _div: HTMLElement
    private x:number
    private y:number
    
    private gun : Gun
    private game : Game
    
    // Properties
    public get div(): HTMLElement { return this._div }
    
    constructor(x:number, y:number, tree:Tree, game : Game) {
        this._div = document.createElement("bird")
        tree.div.appendChild(this._div)
             
        this.game = game

        this.x = x
        this.y = y
        
        this._div.style.transform = `translate(${this.x}px, ${this.y}px)`

        // this.gun = new Gun(this)
        // maak hier een click listener
        // de click event handler moet een gun toevoegen
        // als de kip al een gun heeft, dan moet de fire() functie van de gun worden aangeroepen
        this._div.addEventListener("click", () => this.handleClick())
    }

    handleClick(): void {
        console.log("Chicken click! ")
       
        if(!this.gun) {
            this.gun = new Gun(this, this.game)
        }
        this.gun.fire()
    }
}