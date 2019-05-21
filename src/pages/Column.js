import React, { Component } from 'react'
import style from '../assets/css/Column.module.css'

import List from '../components/List'

import axios from 'axios'

class Column extends Component {

    state = {
        lists: []
    };

    render() {
        return (
            <div>
                <div className={style.col}>
                    <p>分类</p>
                </div>
                <List lists={this.state.lists} dataName="column" />
            </div>
        )
    }
    async componentDidMount() {
        let res = await axios({ url: '/mock/column', params: { _limit: 12 } })
        console.log(res)
        this.setState({ lists: res.data.page_data })
    }
}

export default Column;

