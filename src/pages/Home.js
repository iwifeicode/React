import React, { Component } from 'react'
import style from '../assets/css/Home.module.css'

import Swiper from '../components/Swiper'
import Cell from '../components/Cell'
import List from '../components/List'

import { Icon, } from 'antd';

import axios from 'axios'

import propTypes from 'prop-types';

import connect from 'react-redux/es/connect/connect'

import {axios1} from '../store/actions'

class Home extends Component {

    state = {
        lists: [],
    };

    static contextTypes = {
        appData: propTypes.string,
        setLoaDing: propTypes.func
    };

    render() {
        return (
            <div>
                <div className={style.hom}>
                    <ul>
                        <li className={style.teli3}><Icon type="user" /></li>
                        <li className={style.teli}>首页</li>
                        <li className={style.teli2}><Icon type="search" /></li>
                    </ul>
                </div>
                <Swiper />
                <Cell />
                <List lists={this.props.home} dataName="home" />

            </div>
        )
    }

    //async + await 如何捕获到 error
    // async componentDidMount() {

    //     this.context.setLoaDing(true)

    //     try {
    //         let res = await axios({ url: '/mock/home', params: { _limit: 12 } })
    //         // console.log(res)
    //         this.setState({ lists: res.data.page_data })
    //     } catch (e) {
    //         console.log("错误捕获", e)
    //         this.setState({ lists: [] })
    //     }

    //     this.context.setLoaDing(false)
    // }

    componentDidMount(){
        this.context.setLoaDing(true)

        this.props.get({ url: '/mock/home', params: { _limit: 12 },typename: 'UPDATE_HOME'})

        this.context.setLoaDing(false)
    }
}

const State = state =>({
    home : state.home
})

const Dispatch=dispatch=>({
    get:({url,params,typename})=>dispatch(axios1({
        dispatch,url,params,typename
    }))
})

export default connect(State,Dispatch)(Home);