import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from './Header';
import {UserDashboard, UserForm} from '../users';

class Landing extends Component {

    constructor(props){
        super(props);
        this.state = {
            view: 1
        };
    }

    changeView = (view) => {
        this.setState({view});
    }

    render(){
        return(
            <div>
                <Header/>
                <Switch>
                    <Route exact path='/home' component={UserDashboard}/>
                    <Route exact path='/add-user' component={UserForm}/>
                </Switch>
            </div>
        )
    }

}

export default Landing;