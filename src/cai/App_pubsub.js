import React, { Component } from 'react'
import '../assets/css/App.css'

import { Switch, Redirect, Route } from 'react-router-dom'

import propTypes from 'prop-types';

import Home from '../pages/Home'
import Footer from '../layouts/Footer'

import Detail from '../pages/Detail'
import Follow from '../pages/Follow'
import Column from '../pages/Column'
import Reg from '../pages/Reg'
import Login from '../pages/Login'
import User from '../pages/User'
import Error from '../pages/Error'

import AuthRoute from '../guard/Auth'
import Loading from '../components/Loading';

import pubsub from 'pubsub-js'

class App extends Component {

    constructor(){
        super();
        this.state={
            bLoading:false
        }

        //订阅
        pubsub.subscribe('update_loading',(messname,data)=>{
            this.setState({bLoading:data})//可以
            // this.state.bLoading = data  //不可以
        })
    }



    render() {
        return (
            <div className='App'>
                {this.state.bLoading && <Loading />}
                {/*  匹配+展示 */}
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/detail/:id" component={Detail} />
                    <Route path="/follow" component={Follow} />
                    <Route path="/column" component={Column} />
                    <Route path="/reg" component={Reg} />
                    <Route path="/login" component={Login} />

                    //路由守卫
                    {/* <Route path="/user" component={User} /> */}
                    <AuthRoute path="/user" component={User} />

                    <Redirect exact from="/" to="/home" />
                    <Route component={Error} />
                </Switch>

                <Footer />
            </div>
        );
    }
}

export default App;