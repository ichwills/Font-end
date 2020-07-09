import React,{useState}from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home'

  // redux    javascript提供的一个可预测性(我们给一个固定的输入 那么必定可以等到一个结果)的状态容器

  // 集中的管理react中多个组件的状态

  // redux是一个专门的状态管理库  （在vue等当中也可以使用  但是在react中会比较多）

  // 需求场景 
  // 摸个组件的状态需要共享的时候
  // 一个组件需要改变另外一个组件状态的时候
  // 组件中的状态需要在任何地方都可以拿到

  // 三大原则：
  // 1.单一数据源   整个react中的状态都会被统一的管理到store
  // 2.state是只读的  我们不能够直接改变state 而是要通过触发redux中的特定方法来进行修改
  // 3.使用纯函数来执行修改操作： action来改变redux中的state 

  // 下载    npm install --save redux


function App(props) {
   return (
     <div className="App">
         <div>
           hello
           <Home/>
         </div>
     </div>
   );
 }


export default App;
