import React, { Component } from 'react'

export default class phone extends Component {
    componentDidMount() {
        console.log(this.props.match.params.id)
    }
    
    render() {
        return (
            <div>
                phone
            </div>
        )
    }
}
