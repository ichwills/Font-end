import React, { Component } from 'react'
import {Route,NavLink} from 'react-router-dom'
import HomeA from './home/Homea'
import HomeB from './home/Homeb'
export default class Home extends Component {

    
    render() {
        return (
            <div>
                home

                <NavLink to="/home/homea">homea</NavLink>
                <NavLink to="/home/homeb">homeb</NavLink>
                <Route path="/home/homea" component={HomeA}/>
                <Route path="/home/homeb" component={HomeB}/>
            </div>
        )
    }
}
