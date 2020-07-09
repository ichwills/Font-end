import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import Phone from './components/phone'
import User from './components/User'
import {Route,Link,NavLink,Switch,Redirect,withRouter} from 'react-router-dom'
function App(props) {

  // withRouter 高阶组件（HOC 参数是一个组件 同时返回的也是一个组件 这类组件我们成为高阶组件）就是让不是路由切换的组件也具有路由切换组件的三个属性(location match history)

  // 监控路由变化 history.listen((link)=>{
    // Link.pathname  切换路径
  // })

  // 编程式导航
  // props.history.push("/xxxx")

  // 路由传参
  // params方式进行传参
  // 1.需要在路由规则中设置传递的接受参数   :xxx
  // 2.发送参数 直接在跳转路径后进行编写
  // 3.接受 props.match.params.参数名
  // 优势：刷新地址，参数依然存在
  // 缺点 只能传递字符串，并且  参数过多的时候url会变得比较丑陋

  // query方式
  // 1.不需要再路由规则中进行传递参数的配置
  // 2.直接发送数据
  // 3.使用this.props.location.query.xxx
  props.history.listen((link)=>{
    console.log(link)
  })

  // console.log(props)
  return (
    <div className="App">
        <div>
          <NavLink to="/home">点我去home</NavLink>
          <NavLink to="/phone/我是参数">点我去phone</NavLink>
          <NavLink to={{pathname:"/User",query:{name:"小明"}}}>点我去User</NavLink>

          <button onClick={()=>{props.history.push("/home")}}>点我去home</button>
          <button onClick={()=>{props.history.push("/phone")}}>点我去phone</button>
          <button onClick={()=>{props.history.push("/User")}}>点我去user</button>

        </div>
    <Switch>

    
      <Route path="/home" component={Home}/>
      <Route path="/phone/:id" component={Phone}/>
      <Route path="/User" component={User}/>
      <Route path="/User" component={User}/>
      <Redirect from="/" to="/home/homea" exact/>

      </Switch>
    </div>
  );
}

export default withRouter(App);
