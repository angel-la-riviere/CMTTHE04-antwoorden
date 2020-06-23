"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var GameObject = (function () {
    function GameObject(tag) {
        this.x = 0;
        this.y = 0;
        this._div = document.createElement(tag);
        var level = document.getElementsByTagName("level")[0];
        level.appendChild(this._div);
    }
    Object.defineProperty(GameObject.prototype, "div", {
        get: function () { return this._div; },
        enumerable: true,
        configurable: true
    });
    GameObject.prototype.getRectangle = function () {
        return this._div.getBoundingClientRect();
    };
    GameObject.prototype.update = function () {
        this._div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return GameObject;
}());
var Car = (function (_super) {
    __extends(Car, _super);
    function Car() {
        var _this = _super.call(this, "car") || this;
        _this.speed = 0;
        _this.x = (Math.random() * -400) - 168;
        _this.y = Math.ceil(Math.random() * 5) * 120;
        _this.speed = Math.random() * 2 + 2;
        _this.setColor();
        _this.hitbox = document.createElement("carhitbox");
        _this.div.appendChild(_this.hitbox);
        return _this;
    }
    Car.prototype.update = function () {
        this.x += this.speed;
        if (this.x > window.innerWidth) {
            this.x = -this.div.clientWidth;
        }
        _super.prototype.update.call(this);
    };
    Car.prototype.setColor = function () {
        var color = Math.random() * 360;
        this.div.style.webkitFilter = "hue-rotate(" + color + "deg)";
        this.div.style.filter = "hue-rotate(" + color + "deg)";
    };
    return Car;
}(GameObject));
var Game = (function () {
    function Game() {
        this.cars = [];
        this.score = 0;
        this.div = document.createElement("level");
        document.body.appendChild(this.div);
        this.scoreElement = document.createElement("score");
        this.scoreElement.innerHTML = "Score: 0";
        this.div.appendChild(this.scoreElement);
        this.player = new Player(this);
        for (var i = 0; i < 6; i++) {
            this.cars.push(new Car());
        }
        this.gameLoop();
    }
    Game.prototype.gameLoop = function () {
        this.player.update();
        for (var _i = 0, _a = this.cars; _i < _a.length; _i++) {
            var car = _a[_i];
            car.update();
            if (this.checkCollision(this.player.getRectangle(), car.getRectangle())) {
                console.log("botsing");
                this.player.reset();
            }
        }
        requestAnimationFrame(this.gameLoop.bind(this));
    };
    Game.prototype.checkCollision = function (a, b) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom);
    };
    Game.prototype.addPoint = function () {
        this.score++;
        this.scoreElement.innerHTML = "Score: " + this.score;
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
var Player = (function (_super) {
    __extends(Player, _super);
    function Player(game) {
        var _this = _super.call(this, "player") || this;
        _this.game = game;
        _this.reset();
        _this.hitbox = document.createElement("playerhitbox");
        _this.div.appendChild(_this.hitbox);
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
        return _this;
    }
    Player.prototype.onKeyDown = function (event) {
        switch (event.keyCode) {
            case 65:
                this.x -= 102;
                break;
            case 68:
                this.x += 102;
                break;
            case 87:
                this.y -= 30;
                if (this.y < -50) {
                    this.y = 670;
                    console.log("de overkant gehaald!");
                    this.game.addPoint();
                }
                break;
            case 83:
                this.y += 30;
                break;
        }
    };
    Player.prototype.reset = function () {
        this.x = 400;
        this.y = 670;
    };
    return Player;
}(GameObject));
//# sourceMappingURL=main.js.map