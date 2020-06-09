var Chicken = (function () {
    function Chicken(x, y, tree, game) {
        var _this = this;
        this._div = document.createElement("bird");
        tree.div.appendChild(this._div);
        this.game = game;
        this.x = x;
        this.y = y;
        this._div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
        this._div.addEventListener("click", function () { return _this.handleClick(); });
    }
    Object.defineProperty(Chicken.prototype, "div", {
        get: function () { return this._div; },
        enumerable: true,
        configurable: true
    });
    Chicken.prototype.handleClick = function () {
        console.log("Chicken click! ");
        if (!this.gun) {
            this.gun = new Gun(this, this.game);
        }
        this.gun.fire();
    };
    return Chicken;
}());
var Tree = (function () {
    function Tree(x, y, g) {
        this.chickens = [];
        this._div = document.createElement("tree");
        var game = document.getElementsByTagName("game")[0];
        game.appendChild(this._div);
        this.speed = Math.random() * 4 + 1;
        this.x = x;
        this.y = y;
        for (var i = 0; i < Math.random() * 4; i++) {
            this.chickens.push(new Chicken(i * 100 + 20, -70, this, g));
        }
    }
    Object.defineProperty(Tree.prototype, "div", {
        get: function () { return this._div; },
        enumerable: true,
        configurable: true
    });
    Tree.prototype.move = function () {
        this.x += this.speed;
        if (this.x > window.innerWidth)
            this.x = -450;
        this._div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Tree;
}());
var Game = (function () {
    function Game() {
        this.trees = [];
        this.bullets = [];
        for (var i = 0; i < 4; i++) {
            this.trees.push(new Tree(-100, i * 250 + 100, this));
        }
        this.gameLoop();
    }
    Game.prototype.addBullet = function (bullet) {
        this.bullets.push(bullet);
    };
    Game.prototype.gameLoop = function () {
        var _this = this;
        for (var _i = 0, _a = this.trees; _i < _a.length; _i++) {
            var tree = _a[_i];
            tree.move();
        }
        for (var _b = 0, _c = this.bullets; _b < _c.length; _b++) {
            var bullet = _c[_b];
            bullet.move();
        }
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
var Bullet = (function () {
    function Bullet(x, y) {
        this.div = document.createElement("bullet");
        var game = document.getElementsByTagName("game")[0];
        game.appendChild(this.div);
        this.x = x;
        this.y = y;
        this.xspeed = -1;
        this.yspeed = 1;
        this.move();
    }
    Bullet.prototype.move = function () {
        this.x += this.xspeed;
        this.y += this.yspeed;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Bullet;
}());
var Gun = (function () {
    function Gun(chicken, game) {
        this.div = document.createElement("gun");
        chicken.div.appendChild(this.div);
        this.game = game;
        this.x = 20;
        this.y = 40;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
        this.fire();
    }
    Gun.prototype.fire = function () {
        var rect = this.div.getBoundingClientRect();
        console.log("plaats een kogel op " + rect.left + " , " + rect.top);
        this.game.addBullet(new Bullet(rect.left, rect.top));
    };
    return Gun;
}());
//# sourceMappingURL=main.js.map