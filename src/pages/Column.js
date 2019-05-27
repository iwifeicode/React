import React, { Component } from 'react'
import style from '../assets/css/Column.module.css'

import List from '../components/List'

import axios from 'axios'

import propTypes from 'prop-types';

import connect from 'react-redux/es/connect/connect'

import {axios1} from '../store/actions'


class Column extends Component {

    state = {
        lists: []
    };

    static contextTypes={
        appData:propTypes.string,
        setLoaDing:propTypes.func
    };

    render() {

        

        return (
            <div>
                <div className={style.col}>
                    <p>分类</p>
                </div>
                <List lists={this.props.column} dataName="column" />
            </div>
        )
    }
    async componentDidMount() {
        this.context.setLoaDing(true)
        let res = await axios({ url: '/mock/column', params: { _limit: 18} })
        console.log(res)
        this.setState({ lists: res.data.page_data })

        this.context.setLoaDing(false)
    }
    componentDidMount(){
        this.props.get({ url: '/mock/column', params: { _limit: 18},typename: 'UPDATE_COLUMN'})
    }
}

const State = state =>({
    column : state.column
})

const Dispatch=dispatch=>({
    get:({url,params,typename})=>dispatch(axios1({
        dispatch,url,params,typename
    }))
})

export default connect(State,Dispatch)(Column);

