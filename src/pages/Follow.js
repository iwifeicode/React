import React, { Component } from 'react'
import '../assets/css/Follow.css'

import axios from 'axios'

class Follow extends Component {

    state={
        foll:[]
    };

    render() {
        
        return this.state.foll && this.state.foll.map((item,index)=><div key={item.id}>
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
                    <div className="aui-coll-l"><i className="aui-icon-zan"></i>点赞</div>
                    <div className="aui-coll-f"><i className="aui-icon-shi"></i>分享</div>
                </div>
                <div className="devider b-line"></div>
            </div>
        </div>
    </div>)
    }
    async componentDidMount() {
        let res = await axios({ url: '/mock/follow', params: { _limit: 6 } })
        console.log(res)
        this.setState({foll:res.data.page_data})
    }
}

export default Follow;