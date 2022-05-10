
export abstract class Vehicle {
    //getNumberOfSeats():number {
    //    throw new Error("Metodo no Implementado");
    //}

    abstract getNumberOfSeats(): number;
}

export class Tesla extends Vehicle {

    constructor(private numberOfSeats: number) {
        super();
    }

    getNumberOfSeats(): number {
        throw new Error("Method not implemented.");
    }
}

export class Audi extends Vehicle {

    constructor(private numberOfSeats: number) {
        super();
    }
    getNumberOfSeats(): number {
        throw new Error("Method not implemented.");
    }
}

export class Toyota extends Vehicle {

    constructor(private numberOfSeats: number) {
        super();
    }

    getNumberOfSeats(): number {
        throw new Error("Method not implemented.");
    }
}

export class Honda extends Vehicle {

    constructor(private numberOfSeats: number) {
        super();
    }

    getNumberOfSeats(): number {
        throw new Error("Method not implemented.");
    }
}