import React, { Component } from 'react'
import News from "./News"
import Phone from "./phone"
export default class Home extends Component {
    constructor(props){
        super(props)
        this.state={
            text:"我是默认值"
        }
    }
    dataFun=(text)=>{
        console.log(text)
        this.setState({
            text
        })
    }
    render() {
        return (
            <div>
                home-----{this.state.text}
                <News text="你好" fufun={this.dataFun}/>
                <Phone/>
            </div>
        )
    }
}

