import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import Phone from './components/phone'
import User from './components/User'
import {Route,Link,NavLink,Switch,Redirect} from 'react-router-dom'
function App() {
  return (
    <div className="App">
        <div>
          <NavLink to="/home">点我去home</NavLink>
          <NavLink to="/phone">点我去phone</NavLink>
          <NavLink to="/User">点我去User</NavLink>

        </div>
    <Switch>

    
      <Route path="/home" component={Home}/>
      <Route path="/phone" component={Phone}/>
      <Route path="/User" component={User}/>
      <Route path="/User" component={User}/>
      <Redirect from="/" to="/home/homea" exact/>

      </Switch>
    </div>
  );
}

export default App;
