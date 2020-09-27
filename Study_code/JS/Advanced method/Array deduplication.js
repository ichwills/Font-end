const arr = [1, 1, "1", 17, true, true, false, false, "true", "a", {}, {}]; //'true'!=true

//Set
const res = Array.from(new Set(arr));
console.log(res);

//for loop  *here has some problem
const _res = (arr) => {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1);
        // 每删除一个树，j--保证j的值经过自加后不变。同时，len--，减少循环次数提升性能
        len--;
        j--;
      }
    }
  }
  return arr;
};
console.log(_res(arr));

//indexOf
const result = (arr) => {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (res.indexOf(arr[i]) === -1) res.push(arr[i]);
  }
  return res;
};
console.log(result(arr));

//include
const _result = (arr) => {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (!res.includes(arr[i])) res.push(arr[i]);
  }
  return res;
};
console.log(_result(arr));

//filter
const unique = (arr) => {
  return arr.filter((item, index) => {
    return arr.indexOf(item) === index;
  });
};
console.log(unique(arr));

//Map
const _unique = (arr) => {
  const map = new Map();
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (!map.has(arr[i])) {
      map.set(arr[i], true);
      res.push(arr[i]);
    }
  }
  return res;
};
console.log(_unique(arr));
