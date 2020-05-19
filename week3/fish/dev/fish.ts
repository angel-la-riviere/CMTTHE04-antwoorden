class Fish {

    private fish : HTMLElement
    
    constructor() {
        console.log("Fish was created!")

        this.createFish()
        this.killFish()
    }

    killFish(){
        console.log("Aargh!")
    }

    createFish() {
        //
        // vis element
        //
        this.fish = document.createElement("fish")
        this.fish.addEventListener("click", () => this.onFishClick())
        
        let game = document.getElementsByTagName("game")[0]
        game.appendChild(this.fish)
    
        let x = Math.random() * (window.innerWidth - this.fish.clientWidth)
        let y = Math.random() * (window.innerHeight - this.fish.clientHeight)
        let color = Math.random() * 360
    
        this.fish.style.transform = `translate(${x}px, ${y}px)`
        this.fish.style.filter = `hue-rotate(${color}deg)`
    }

    onFishClick() {
        this.fish.classList.add("dead")
    }
}