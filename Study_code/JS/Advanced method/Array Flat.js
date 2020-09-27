"use strict";
const arr = [1, [2, [3, [4, 5]]], 6];

//Regexp
const _result = JSON.stringify(arr).replace(/\[|\]/g, "").split(",");
const _result = JSON.parse(
  "[" + JSON.stringify(arr).replace(/\[|\]/g, "") + "]"
);
console.log(_result);

//flat
const result = arr.flat(Infinity); //attention:letter 'I' must be capital
console.log(result);

//recursion
const res = [];
const fn = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      fn(arr[i]);
    } else {
      res.push(arr[i]);
    }
  }
};
fn(arr);
console.log(res);

//reduce
const flatten = (arr) => {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flatten(cur) : cur);
  }, []);
};
const _res = flatten(arr);

console.log(_res);
