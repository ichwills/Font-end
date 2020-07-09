import React, { Component } from 'react'

export default class User extends Component {
    componentDidMount() {
        console.log(this.props.location.query.name)
    }
    
    render() {
        return (
            <div>
                User
            </div>
        )
    }
}
