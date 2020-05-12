let game = document.getElementsByTagName("game")[0]

for (let i = 0; i < 100; i++) {
    createFish()
    createBubble()    
}


function createFish() {
    //
    // vis element
    //
    let fish = document.createElement("fish")
    fish.addEventListener("click", onFishClick)
    
    game.appendChild(fish)

    x = Math.random() * (window.innerWidth - fish.clientWidth)
    y = Math.random() * (window.innerHeight - fish.clientHeight)
    color = Math.random() * 360

    fish.style.transform = `translate(${x}px, ${y}px)`
    fish.style.filter = `hue-rotate(${color}deg)`
}

function createBubble() {
    //
    // bubble element
    //
    let bubble = document.createElement("bubble")
    bubble.addEventListener("click", onBubbleClick)
    game.appendChild(bubble)

    x = Math.random() * (window.innerWidth - bubble.clientWidth)
    y = window.innerHeight - bubble.clientHeight
    bubble.style.transform = `translate(${x}px, ${y}px)`
}

function onFishClick(event) {
    event.target.classList.add("dead")
}

function onBubbleClick() {
    event.target.remove()
}