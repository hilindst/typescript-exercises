typescriptCopy code
interface Vehicle {
    brand: string;
    speed: number;
    
    accelerate(): void;
}

const car: Vehicle = {
    brand: "Toyota",
    speed: 120,
    accelerate(): void {
        console.log(`The ${this.brand} is accelerating`);
    }
}

car.accelerate();