//use eval
function jsonParse(opt) {
  return eval("(" + opt + ")");
}
console.log(jsonParse(JSON.stringify({ x: 5 })));
console.log(jsonParse(JSON.stringify([1, "false", false])));
console.log(jsonParse(JSON.stringify({ b: undefined })));
