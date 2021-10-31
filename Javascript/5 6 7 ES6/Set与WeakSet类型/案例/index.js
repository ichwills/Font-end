"use strict";
class Lesson {
  constructor() {
    this.lis = document.querySelectorAll("ul>li");
    this.countELem = document.getElementById("count");
    this.listElem = document.getElementById("lists");
    this.map = new WeakMap();
  }
  run() {
    this.lis.forEach((item) => {
      item.querySelector("a").addEventListener("click", (event) => {
        const elem = event.target;
        const state = elem.getAttribute("select");
        if (state) {
          elem.removeAttribute("select");
          this.map.delete(elem.parentElement);
          elem.innerHTML = "+";
          elem.style.backgroundColor = "green";
        } else {
          elem.setAttribute("select", true);
          this.map.set(elem.parentElement, true);
          elem.innerHTML = "-";
          elem.style.backgroundColor = "red";
        }
        this.render();
      });
    });
  }
  count() {
    return [...this.lis].reduce((count, item) => {
      return (count += this.map.has(item) ? 1 : 0);
    }, 0);
  }
  lists() {
    return [...this.lis]
      .filter((item) => {
        return this.map.has(item);
      })
      .map((item) => {
        return `<span>${item.querySelector("span").innerHTML}</span>`;
      });
  }
  render() {
    this.countELem.innerHTML = `现在共选了${this.count()}课`;
    this.listElem.innerHTML = this.lists().join("");
  }
}
