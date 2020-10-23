//格式化金钱
const ThousandNum = (num) =>
  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
const money = ThousandNum(20190214);
console.log(money);

//生成随机ID
const RandomId = (len) => Math.random().toString(36).substr(3, len);
const id = RandomId(10);
console.log(id);

//生成随机HEX色值
const RandomColor = () =>
  "#" +
  Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padEnd(6, "0");
const color = RandomColor();
console.log(color);

//生成星级评分
const StartScore = (rate) => "★★★★★☆☆☆☆☆".slice(5 - rate, 10 - rate);
const start = StartScore(Math.round(Math.random() * 5)); //5以内的随机数字
console.log(start);

// //操作URL查询参数
// const params = new URLSearchParams(location.search.replace(/\?/gi, ""));
// console.log(params.has("young"));//true
// console.log(params.get("sex"));//male
