import React, { Component } from 'react'
import axios from 'axios'
export default class Home extends Component {
    componentDidMount() {
        axios.get("/api/101320101.html").then((ok)=>{
            console.log(ok)
        })
    }
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
