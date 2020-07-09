import React,{useState}from 'react';
import logo from './logo.svg';
import './App.css';

// Hook是react中16.7新增的一个特性  主要是用来让无状态组件 可以使用状态  在react开发中状态的管理是必不可少的  以前为了进行状态管理
// 需要使用类组件或者redux等来管理

  // class App extends React.Component{
  //   constructor(props){
  //     super(props)
  //     this.state={
  //       text:"我是状态数据"
  //     }
  //   }
  //   render(){
  //     return (
  //       <div>
  //           hello----{this.state.text}
  //        </div> 
  //     )
  //   }
  // }

// 可以使用react Hook 中的useState 来进行实现
// useStaate是来定义一个状态的   他与类组件的状态不同，函数组件的状态可以是对象也可以是基础类型数据。
// useState返回的是一个数组 第一个是当前的状态值   第二个是对象表明用于更改状态的函数（类似于setState）
// function App(props) {
//  let [val,setVal] = useState(0)
//   return (
//     <div className="App">
//         <div>
//           使用数据:{val}
//           <button onClick={()=>{setVal(val+1)}}>点我进行数据的修改</button>
//         </div>

//     </div>
//   );
// }

// 如果有多个状态怎么办？
// 1.声明对象类型的状态
// 2.多次声明
function App(props) {
  // // 1.声明对象类型的状态
  let [val,setVal] = useState({
    vala:0,
    valb:1,
    valc:2
  })
  // 2.多次声明（推荐使用）
  let [vala,setVala] = useState(0)
  let [valb,setValb] = useState(1)
  let [valc,setValc] = useState(2)
   return (
     <div className="App">
         <div>
           使用数据:{vala}-----{valb}-----{valc}
            {/* 至于修改  后面如果有多个状态的话使用其他方式修改 */}
         </div>
 
     </div>
   );
 }


export default App;
