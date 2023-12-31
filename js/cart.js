'use strict';

const cart = {
  items: [],
  count: 0,
  discount: 0,
  set setDiscount(promocode) {
    promocode = promocode.toUpperCase();
    if (promocode === 'METHED') {
      this.discount = 15;
    }
    if (promocode === 'NEWYEAR') {
      this.discount = 21;
    }
  },
  get totalPrice() {
    return this.calculateItemPrice();
  },
  add(name, price, count = 1) {
    const obj = {
      name,
      price,
      count,
    };
    this.increaseCount();
    this.items.push(obj);
    this.calculateItemCount();
  },
  increaseCount(numb = 0) {
    this.count += numb;
  },
  calculateItemPrice() {
    const sum = this.items.reduce(
        (acc, item) => acc += (item.price * item.count)
        , 0);
    return Math.round(sum - (sum * this.discount / 100));
  },
  calculateItemCount() {
    this.count = this.items.reduce((acc, item) =>
      acc += item.count
    , 0);
  },
  clear() {
    this.items = [];
  },
  print() {
    console.log(`Товары: ${JSON.stringify(this.items)} 
      \n 
      Общая стоимость: ${this.totalPrice}
      \n
      Общее количество товаров: ${this.count}
    `);
  },
};


cart.add('Принтер', 3600, 4);
cart.add('iMac', 160000, 1);
cart.add('iPhone', 170000, 2);
cart.add('iPad', 90000, 4);
cart.add('Телевизор', 105000, 5);
cart.add('Чайник', 5000, 6);

cart.setDiscount = 'methed';


cart.print();
