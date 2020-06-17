/// <reference path="vehicle.ts" />


class Car extends Vehicle{

    private color:string = ""
    // declaratie
    private wheel : Wheel

    constructor() {
        super()
        this.color = "Red"
        console.log("Car created")

        // composition
        this.wheel = new Wheel()
        this.wheel.turn()
    }

    public eenBepaaldeFunctie() {
        this.drive()
    }
    
}