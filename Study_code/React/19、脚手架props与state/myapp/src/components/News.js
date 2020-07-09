import React, { Component } from 'react'

export default class News extends Component {
    constructor(props){
        super(props)
        this.state={
            num:123
        }
    }
    fun(){
        this.setState({
            num:321
        })
    }
    render() {
        return (
            <div>
                News---{this.props.text}----{this.state.num}
                <button onClick={this.fun.bind(this)}>点我</button>

            </div>
        )
    }
}
