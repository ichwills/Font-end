import React, { Component } from 'react'
import PubSub from 'pubsub-js'
export default class News extends Component {
    constructor(props){
        super(props)
        this.state={
            num:123,
            ziText:"我是子组件的数据"
        }
    }
    fun(){
        this.setState({
            num:321
        })
    }

    pubsub(){
        PubSub.publish("evt",this.state.num)
    }
    render() {
        return (
            <div>
                News---{this.props.text}----{this.state.num}
                <button onClick={this.fun.bind(this)}>点我</button>

                <button onClick={this.props.fufun.bind(this,this.state.ziText)}>点我进行数据的发送</button>

                <button onClick={this.pubsub.bind(this)}>点我进行同级传值</button>

            </div>
        )
    }
}
