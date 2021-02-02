class ArrayOfNumbers {
    constructor(public collection: number[]) {}

    get(index: number): number {
        return this.collection[index];
    }
}

class ArrayOfStrings {
    constructor(public collection: string[]) {}

    get(index: number): string {
        return this.collection[index];
    }
}

class ArrayOfAnything<T> {
    constructor(public collection: T[]) {}

    get(index: number): T {
        return this.collection[index];
    }
}

const arr = new ArrayOfAnything<string>(['a','b','c']);


// Example of generics with functions

function printStrings(arr: string[]): void {
    for (let index = 0; index < arr.length; index++) {
        console.log(arr[index]);
    }
}

function printNumbers(arr: number[]): void {
    for (let index = 0; index < arr.length; index++) {
        console.log(arr[index]);
    }
}

function printAnything<T>(arr: T[]): void {
    for (let index = 0; index < arr.length; index++) {
        console.log(arr[index]);
    }
}

printAnything<string>(['a','b','c']);


// Generic constraints
class Car {
    print() {
        console.log('I am a car');
    }
}

class House {
    print() {
        console.log('I am a house');
    }
}

interface Printable {
    print(): void;
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
    for (let index = 0; index < arr.length; index++) {
        arr[index].print();
    }
}

printHousesOrCars<House>([new House(), new House()]);
printHousesOrCars<Car>([new Car(), new Car()]);