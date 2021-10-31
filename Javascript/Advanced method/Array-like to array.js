"use strict";
const arrayLike = {
  0: 3,
  1: 4,
  2: 5,
  3: 6,
  4: 7,
  length: 5,
};

//Array.from
console.log(Array.from(arrayLike));

//Array.prototype.slice.call
console.log(Array.prototype.slice.call(arrayLike));

//Spread operator  must have api
// var array = [...myIterable];

//concat apply
console.log(Array.prototype.concat.apply([], arrayLike));
