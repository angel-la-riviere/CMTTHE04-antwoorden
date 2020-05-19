class Bubble {

    private bubble : HTMLElement

    constructor() {
        console.log("Blub... blub...")

        this.createBubble()
    }

    createBubble() {
        //
        // bubble element
        //
        this.bubble = document.createElement("bubble")
        this.bubble.addEventListener("click", () => this.onBubbleClick())

        let game = document.getElementsByTagName("game")[0]
        game.appendChild(this.bubble)
    
        let x = Math.random() * (window.innerWidth - this.bubble.clientWidth)
        let y = window.innerHeight - this.bubble.clientHeight

        this.bubble.style.transform = `translate(${x}px, ${y}px)`
    }

    onBubbleClick() {
        this.bubble.remove()
    }
}