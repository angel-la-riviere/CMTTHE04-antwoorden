"use strict";
class Vehicle {
    constructor() {
    }
    drive() {
        console.log("Drive");
    }
}
class Car extends Vehicle {
    constructor() {
        super();
        this.color = "";
        this.color = "Red";
        console.log("Car created");
        this.wheel = new Wheel();
        this.wheel.turn();
    }
    eenBepaaldeFunctie() {
        this.drive();
    }
}
class Main {
    constructor() {
        let car = new Car();
        car.eenBepaaldeFunctie();
    }
}
window.addEventListener("load", () => new Main());
class Wheel {
    constructor() {
        this.size = 0;
        console.log("Wheel created");
    }
    turn() {
        console.log("Turn wheel");
    }
}
//# sourceMappingURL=main.js.map