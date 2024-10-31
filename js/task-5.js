class Car {
    constructor({ maxSpeed, price }) {
        this.maxSpeed = maxSpeed;
        this._price = price;
        this.speed = 0;
        this.isOn = false;
        this.distance = 0;
    }

    static getSpecs({ maxSpeed, _price, speed, isOn, distance }) {
        console.log(
            `Max speed: ${maxSpeed}   Price: ${_price}   Speed: ${speed}   Is on: ${isOn}   Distance: ${distance}`
        );
    }

    get price() { 
        return this._price; 
    } 
 
    set price(price) { 
        this._price = price; 
    } 
 
    turnOn() { 
        this.isOn = true; 
    } 
 
    turnOff() { 
        this.isOn = false; 
        this.speed = 0; 
    } 
 
    accelerate(value) { 
        if (value + this.speed <= this.maxSpeed) { 
            this.speed += value; 
        } 
    } 
 
    decelerate(value) { 
        if (this.speed - value >= 0) { 
            this.speed -= value; 
        } 
    }
    
    drive(hours) {
        if (this.isOn === true) {
            this.distance += hours * this.speed;
        }
    }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);

console.log(mustang.price); 
mustang.price = 4000;
console.log(mustang.price); 