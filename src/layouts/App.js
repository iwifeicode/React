import React, { Component } from 'react'
import '../assets/css/App.css'

import { Switch, Redirect, Route } from 'react-router-dom'

import propTypes from 'prop-types';

import Home from '../pages/Home'
import Footer from './Footer'

import Detail from '../pages/Detail'
import Follow from '../pages/Follow'
import Column from '../pages/Column'
import Reg from '../pages/Reg'
import Login from '../pages/Login'
import User from '../pages/User'
import Error from '../pages/Error'

import AuthRoute from '../guard/Auth'
import Loading from '../components/Loading';

class App extends Component {

    state = {
        appData: '时间',
        loading: false,
        dian: '点赞',
        fen: '分享',
        bFoot:true
    }

    setLoaDing = (bl) => { this.setState({ loading: bl }) }

    //类属性  定义子上下文类型
    static childContextTypes = {
        appData: propTypes.string,
        dian: propTypes.string,
        fen: propTypes.string,
        setLoaDing: propTypes.func
    };
    getChildContext() {  //返回上下文对象
        return {
            appData: this.state.appData,
            dian: this.state.dian,
            fen: this.state.fen,
            setLoaDing: this.setLoaDing
        }
    };

    //路由观测|监听
    componentWillReceiveProps(nextProps){
        let path = nextProps.location.pathname;
        // console.log(path)
        this.checkRoute(path)
    }
    componentDidMount(){
        let path = this.props.location.pathname;
        // console.log(path)
        this.checkRoute(path)
    }
    checkRoute=(path)=>{
        console.log(path)

        if(/detail|login/.test(path)){
            this.setState({bFoot:false})
        }
        if(/home|column|follow|user/.test(path)){
            this.setState({bFoot:true})
        }
    }

    render() {
        return (
            <>
                {this.state.loading && <Loading />}
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
                {this.state.bFoot && <Footer {...this.props}/>}
                {/* <Footer /> */}
            </>
        );
    }
}

export default App;