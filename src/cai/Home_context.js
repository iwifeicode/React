import React, { Component } from 'react'
import style from '../assets/css/Home.module.css'

import Swiper from '../components/Swiper'
import Cell from '../components/Cell'
import List from '../components/List'

import { Icon, } from 'antd';

import axios from 'axios'

import propTypes from 'prop-types';

class Home extends Component {

    state={
        lists:[],
    };

    static contextTypes={
        appData:propTypes.string,
        setLoaDing:propTypes.func
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
             <Cell/>
             <List lists={this.state.lists} dataName="home"/>
             
            </div>
        )
    }

    async componentDidMount(){
        this.context.setLoaDing(true)
        let res = await axios({url:'/mock/home',params:{_limit:8}})
        // console.log(res)
        this.setState({lists:res.data.page_data,})

        this.context.setLoaDing(false)
    }
}

export default Home;