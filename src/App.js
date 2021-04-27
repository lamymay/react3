import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";

import './assets/css/App.css';
import Click from './components/app/click/Click'
import Role from './components/sys/rbac/Role'


class App extends Component {
    render() {
        return (

            <Router>
                <div className='header'>
                    <Link to='/'>index</Link>
                    <Link to='/Success'>Success</Link>
                    <Link to='/login'>login</Link>
                    <Link to='/Blog'>Blog</Link>
                    <Link to='/Role'>Role</Link>
                </div>

                <br/><br/><br/><br/>
                <hr/>
                <Route exact path="/" component={Click}/>
                {/*exact 说明是精确匹配， */}
                <Route exact path="/Role" component={Role}/>

            </Router>
        );
    }
}

export default App;
