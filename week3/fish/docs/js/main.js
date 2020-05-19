"use strict";
var Bubble = (function () {
    function Bubble() {
        console.log("Blub... blub...");
        this.createBubble();
    }
    Bubble.prototype.createBubble = function () {
        var _this = this;
        this.bubble = document.createElement("bubble");
        this.bubble.addEventListener("click", function () { return _this.onBubbleClick(); });
        var game = document.getElementsByTagName("game")[0];
        game.appendChild(this.bubble);
        var x = Math.random() * (window.innerWidth - this.bubble.clientWidth);
        var y = window.innerHeight - this.bubble.clientHeight;
        this.bubble.style.transform = "translate(" + x + "px, " + y + "px)";
    };
    Bubble.prototype.onBubbleClick = function () {
        this.bubble.remove();
    };
    return Bubble;
}());
var Fish = (function () {
    function Fish() {
        console.log("Fish was created!");
        this.createFish();
        this.killFish();
    }
    Fish.prototype.killFish = function () {
        console.log("Aargh!");
    };
    Fish.prototype.createFish = function () {
        var _this = this;
        this.fish = document.createElement("fish");
        this.fish.addEventListener("click", function () { return _this.onFishClick(); });
        var game = document.getElementsByTagName("game")[0];
        game.appendChild(this.fish);
        var x = Math.random() * (window.innerWidth - this.fish.clientWidth);
        var y = Math.random() * (window.innerHeight - this.fish.clientHeight);
        var color = Math.random() * 360;
        this.fish.style.transform = "translate(" + x + "px, " + y + "px)";
        this.fish.style.filter = "hue-rotate(" + color + "deg)";
    };
    Fish.prototype.onFishClick = function () {
        this.fish.classList.add("dead");
    };
    return Fish;
}());
var Game = (function () {
    function Game() {
        this.numberOfElements = 10;
        console.log("Game was created!");
        for (var i = 0; i < this.numberOfElements; i++) {
            new Fish();
            new Bubble();
        }
    }
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
//# sourceMappingURL=main.js.map