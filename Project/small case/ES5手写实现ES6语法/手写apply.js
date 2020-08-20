// 默认定义context.say = this
// fn如果已经被占用
// say需要是一个唯一值 es6的新类型 Symbol   fn = Symbol()

function mySymbol(obj) {
  let unique = (Math.random() + new Date().getTime()).toString(32).slice(0, 8);

  if (obj.hasOwnProperty(unique)) {
    return mySymbol(obj); //递归调用
  } else {
    return unique;
  }
}
//多参数和执行完删除自定义方法删除掉
Function.prototype.myApply = function (context) {
  // 如果没有传或传的值为空对象 context指向window
  if (typeof context === "undefined" || context === null) {
    context = window;
  }
  let fn = mySymbol(context);
  context[fn] = this; //给context添加一个方法 指向this
  // 处理参数 去除第一个参数this 其它传入fn函数
  let arg = [...arguments].slice(1); //[...xxx]把类数组变成数组，arguments为啥不是数组自行搜索 slice返回一个新数组
  context[fn](arg); //执行fn
  delete context[fn]; //删除方法
};

let Person = {
  name: "Tom",
  say(age) {
    console.log(this);
    console.log(`我叫${this.name}我今年${age}`);
  },
};

Person1 = {
  name: "Tom1",
};

Person.say.call(Person1, 18);
