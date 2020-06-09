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
    function GameObject() {
        this.x = 0;
        this.y = 0;
    }
    GameObject.prototype.getRectangle = function () {
        return this.div.getBoundingClientRect();
    };
    GameObject.prototype.update = function () {
        console.log("update function in GameObject");
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return GameObject;
}());
var Ball = (function (_super) {
    __extends(Ball, _super);
    function Ball() {
        var _this = _super.call(this) || this;
        _this.div = document.createElement("ball");
        document.body.appendChild(_this.div);
        _this.x = window.innerWidth;
        _this.y = Math.random() * (window.innerHeight - 100);
        _this.speedX = -3 - (Math.random() * 6);
        _this.speedY = Math.random() * 6 - 3;
        return _this;
    }
    Ball.prototype.hitPaddle = function () {
        this.speedX *= -1;
        this.goFaster();
    };
    Ball.prototype.update = function () {
        _super.prototype.update.call(this);
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.y + this.getRectangle().height > window.innerHeight || this.y < 0) {
            this.speedY *= -1;
        }
        if (this.x > window.innerWidth) {
            this.speedX *= -1;
        }
    };
    Ball.prototype.goFaster = function () {
        this.speedX *= 1.05;
        this.speedY *= 1.05;
    };
    return Ball;
}(GameObject));
var Game = (function () {
    function Game() {
        this.gameobjects = [];
        this.gameobjects.push(new Paddle(20, 87, 83));
        for (var i = 0; i < 5; i++) {
            this.gameobjects.push(new Ball());
        }
        this.gameloop();
    }
    Game.prototype.gameloop = function () {
        var _this = this;
        for (var _i = 0, _a = this.gameobjects; _i < _a.length; _i++) {
            var gameobject = _a[_i];
            gameobject.update();
            if (gameobject instanceof Paddle) {
                for (var _b = 0, _c = this.gameobjects; _b < _c.length; _b++) {
                    var ball = _c[_b];
                    if (ball instanceof Ball) {
                        if (this.checkCollision(ball.getRectangle(), gameobject.getRectangle())) {
                            ball.hitPaddle();
                        }
                    }
                }
            }
        }
        requestAnimationFrame(function () { return _this.gameloop(); });
    };
    Game.prototype.checkCollision = function (a, b) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom);
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
var Paddle = (function (_super) {
    __extends(Paddle, _super);
    function Paddle(xp, up, down) {
        var _this = _super.call(this) || this;
        _this.downSpeed = 0;
        _this.upSpeed = 0;
        _this.div = document.createElement("paddle");
        document.body.appendChild(_this.div);
        _this.upkey = up;
        _this.downkey = down;
        _this.x = xp;
        _this.y = 200;
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
        window.addEventListener("keyup", function (e) { return _this.onKeyUp(e); });
        return _this;
    }
    Paddle.prototype.ditIsEenFunctieVanPaddle = function () {
        console.log("functie van Paddle");
    };
    Paddle.prototype.onKeyDown = function (e) {
        switch (e.keyCode) {
            case this.upkey:
                this.upSpeed = 5;
                break;
            case this.downkey:
                this.downSpeed = 5;
                break;
        }
    };
    Paddle.prototype.onKeyUp = function (e) {
        switch (e.keyCode) {
            case this.upkey:
                this.upSpeed = 0;
                break;
            case this.downkey:
                this.downSpeed = 0;
                break;
        }
    };
    Paddle.prototype.update = function () {
        var newY = this.y - this.upSpeed + this.downSpeed;
        if (newY > 0 && newY + 100 < window.innerHeight)
            this.y = newY;
        _super.prototype.update.call(this);
    };
    return Paddle;
}(GameObject));
//# sourceMappingURL=main.js.map