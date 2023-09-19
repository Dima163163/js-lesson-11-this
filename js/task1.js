'use strict';

const rectangle = {
  widthRectangle: 5,
  heightRectangle: 5,
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
    return `${this.widthRectangle * 2 + this.heightRectangle * 2} см`;
  },
  get square() {
    return `${this.widthRectangle * this.heightRectangle} см2`;
  },
};

console.log('Периметр треугольника: ', rectangle.perimeter);
console.log('Площадь треугольника: ', rectangle.square);
