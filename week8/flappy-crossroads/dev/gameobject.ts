class GameObject {
    // Fields
    private _div:HTMLElement

    protected x : number = 0
    protected y : number = 0

    protected hitbox : HTMLElement

    // properties
    public get div() : HTMLElement { return this._div }

    public getRectangle() : DOMRect {
        return this._div.getBoundingClientRect()
        // return this.hitbox.getBoundingClientRect()
    }

    constructor(tag : string) {
        this._div = document.createElement(tag)
        let level = document.getElementsByTagName("level")[0]!
        level.appendChild(this._div)
    }

    public update() : void {
        this._div.style.transform = `translate(${this.x}px, ${this.y}px)` 
    }
}