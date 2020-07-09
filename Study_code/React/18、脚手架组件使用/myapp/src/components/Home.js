import React, { Component ,Fragment} from 'react'

import ImgA from "../assets/1.jpg"
export default class Home extends Component {
    render() {
        return (
            <Fragment>
               <div>你好我是组件</div>
               <div>你好我是组件1 </div>
               <img src={ImgA}/>
               <img src={require("../assets/1.jpg")}/>
            </Fragment>
           
        )
    }
}
