import React, { Component } from 'react'
import style from '../assets/css/Home.module.css'

import Swiper from '../components/Swiper'
import Cell from '../components/Cell'
import List from '../components/List'

import { Icon, } from 'antd';

import axios from 'axios'

class Home extends Component {

    state={
        lists:[]
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
        let res = await axios({url:'/mock/home',params:{_limit:8}})
        console.log(res)
        this.setState({lists:res.data.page_data})
    }
}

export default Home;