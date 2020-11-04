"use strict";
/**
 * 防抖，即短时间内大量触发同一事件，只会执行一次函数，实现原理为设置一个定时器约定在xx毫秒后再触发事件处理
 * 每次触发事件都会重新设置计时器，直到xx毫秒内无第二次操作
 * 防抖常用于搜索框/滚动条的监听事件处理
 * 如果不做防抖，每输入一个字/滚动屏幕，都会触发事件处理，造成性能浪费。
 */
function debounce(func, wait) {
  let timeout = null;
  return function () {
    let context = this;
    let args = arguments;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(context, args);
    }, wait);
  };
}
