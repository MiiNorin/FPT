import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import Contact from './MoreInfo';
import { NEWS } from '../shared/News';


class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            news: NEWS,
        };
    }

  



    render() {
        const HomePage = () => {
            return (
                <Home 
              new={this.state.news}
          />

            );
        }
        

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/contactus' component={Contact}  />
                    <Redirect to="/home" />
                </Switch>

            </div>
        );
    }
}

export default Main;
