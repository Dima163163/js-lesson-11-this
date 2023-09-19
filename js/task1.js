'use strict';

const rectangle = {
  set widthRect(width) {
    if (typeof width === 'number') {
      this.widthRectangle = width;
    }
  },
  set heightRect(height) {
    if (typeof height === 'number') {
      this.heightRectangle = height;
    }
  },
  get perimeter() {
    const width = this.widthRectangle || 5;
    const height = this.heighthRectangle || 5;
    return `${width * 2 + height * 2} см`;
  },
  get square() {
    const width = this.widthRectangle || 5;
    const height = this.heighthRectangle || 5;
    return `${width * height} см2`;
  },
};

console.log('Периметр треугольника: ', rectangle.perimeter);
console.log('Площадь треугольника: ', rectangle.square);
