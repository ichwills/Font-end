/**
 * var 会挂载在window上
 * var 存在变量提升
 * var 会跨作用域声明
 * var 可以重用变量名
 * 暂时性死区 var能在声明前使用
 */
for (var _i = 0; _i < 10; _i++) {
  console.log(_i);
}
//自执行函数代替var
(function _let() {
  console.log("1");
})();
