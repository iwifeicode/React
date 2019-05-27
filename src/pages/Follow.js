import React, { Component } from 'react'
import '../assets/css/Follow.css'

import propTypes from 'prop-types';

import axios from 'axios'

//私有引入
import date from '../api/date'
// let date = (time) =>'shijian'

import connect from 'react-redux/es/connect/connect'

import {axios1} from '../store/actions'

class Follow extends Component {

    state={
        foll:[]
    };
    

    static contextTypes = {
        appData: propTypes.string,
        dian: propTypes.string,
        fen: propTypes.string,
        setLoaDing:propTypes.func
      }

    render() {
        
        return this.props.follow && this.props.follow.map((item,index)=><div key={item.id}>
        <div className='fol'>
            <p>热点</p>
        </div>
        <div className="Follow">
            <div className="aui-content-text tezhu">
                <div className="aui-content-title">
                    <h2>{item.id}.{item.title}</h2>
                </div>
                <div className="my-car-thumbnail my-car-thumbnail-l"><img src={item.detail.auth_icon} /></div>
                <div className="aui-content-p">
                    <p>{item.detail.content}</p>
                </div>
                <div className="aui-coll-s b-line">
                    <div className="aui-coll-l"><i className="aui-icon-zan"></i>{this.context.dian}</div>
                    <div className="aui-coll-f"><i className="aui-icon-shi"></i>{this.context.fen}/{date(date.time)}</div>
                </div>
                <div className="devider b-line"></div>
            </div>
        </div>
    </div>)
    }
    async componentDidMount() {
        this.context.setLoaDing(true)

        let res = await axios({ url: '/mock/follow', params: { _limit: 16 } })
        console.log(res)
        this.setState({foll:res.data.page_data})

        this.context.setLoaDing(false)
    }
    componentDidMount(){
        this.props.get({ url: '/mock/follow', params: { _limit: 16 },typename: 'UPDATE_FOLLOW'})
    }
}

const State = state =>({
    follow : state.follow
})

const Dispatch=dispatch=>({
    get:({url,params,typename})=>dispatch(axios1({
        dispatch,url,params,typename
    }))
})

export default connect(State,Dispatch)(Follow);