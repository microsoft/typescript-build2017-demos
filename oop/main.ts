abstract class Shape {
    abstract getArea(): number;
};

class Circle extends Shape {
    constructor(public radius: number) {
        super();
    }
    getArea() {
        return Math.PI * this.radius ** 2;
    }
}

class Rectangle extends Shape {
    constructor (public w: number, public h: number) {
        super();
    }
    getArea() {
        return this.w * this.h;
    }
}

class Square extends Shape {
    constructor (public size: number) {
        super();
    }
    getArea() {
        return this.size ** 2;
    }
}

const shape: Shape = new Circle(10);
const area = shape.getArea();
