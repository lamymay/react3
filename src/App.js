import React, {Component} from 'react';
// import logo from './assets/images/logo.svg';
import './assets/css/App.css';
import Login from './components/sys/Login'
// import Login2 from './components/sys/ant/Login2'
import Register from './components/sys/Register'
import Index from './components/sys/Index'
import Users from './components/sys/Users'
import UserUpdate from './components/sys/UserUpdate'
import File from './components/sys/File'
import Role from './components/sys/Role'
import File2 from './components/sys/File2'
import File3 from './components/sys/File3'
import TreeSimple from './components/sys/TreeSimple'
import TreeSearch from './components/sys/ant/TreeSearch'
import TimelineTwo from './components/sys/ant/TimelineTwo'
// import PicturesWall from './components/sys/PicturesWall'
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import IndexMain from "./components/sys/ant/layout/IndexMain";
import ModalBase from "./components/sys/ant/modal/ModalBase";

class App extends Component {
    render() {
        return (

            <Router>
                <div className='header'>
                    <Link to='/'>index</Link>
                    <Link to='/login'>login</Link>
                    {/*<Link to='/Login2'>Login2</Link>*/}
                    <Link to='/register'>Register</Link>
                    <Link to='/Users'>Users</Link>
                    <Link to='/UserUpdate'>UserUpdate</Link>
                    <Link to='/Role'>Role</Link>
                    <Link to='/File'>File</Link>
                    <Link to='/File2'>File2</Link>
                    <Link to='/File3'>File3</Link>
                    <Link to='/TreeSimple'>TreeSimple</Link>
                    <Link to='/TreeSearch'>TreeSearch</Link>
                    <Link to='/TimelineTwo'>TimelineTwo</Link>
                    <Link to='/IndexMain'>IndexMain</Link>
                    <Link to='/ModalBase'>ModalBase</Link>
                    {/*<Link to='/PicturesWall'>PicturesWall</Link>*/}
                </div>

                <br/><br/><br/><br/>
                <hr/>
                <Route exact path="/" component={Index}/>
                <Route exact path="/login" component={Login}/>
                {/*<Route exact path="/Login2" component={Login2}/>*/}
                <Route exact path="/register" component={Register}/>
                <Route exact path="/users" component={Users}/>
                <Route exact path="/UserUpdate" component={UserUpdate}/>
                <Route exact path="/Role" component={Role}/>
                <Route exact path="/File" component={File}/>
                <Route exact path="/File2" component={File2}/>
                <Route exact path="/File3" component={File3}/>
                <Route exact path="/TreeSimple" component={TreeSimple}/>
                <Route exact path="/TreeSearch" component={TreeSearch}/>
                <Route exact path="/TimelineTwo" component={TimelineTwo}/>
                <Route exact path="/IndexMain" component={IndexMain}/>
                <Route exact path="/ModalBase" component={ModalBase}/>
                {/*<Route exact path="/PicturesWall" component={PicturesWall}/>*/}

            </Router>
        );
    }
}

export default App;
