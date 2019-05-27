import React, { Component } from "react";

import '../assets/css/Detail.css'

import propTypes from 'prop-types';

import axios from 'axios'

import querystring from 'query-string'

import {axios1} from '../store/actions'
import connect from "react-redux/es/connect/connect";

class Detail extends Component {

  state = {
    data: {}
  }

  static contextTypes = {
    appData: propTypes.string,
    setLoaDing:propTypes.func
  }

  render() {
    let data = this.props.data
    console.log(data)
    return (
      //片段<React.Fragment></React.Fragment> | <></>
      <React.Fragment>
        <div className="nav">
          <ul>
            <li className="l-btn" onClick={() => this.props.history.go(-1)}></li>
          </ul>
        </div>
        {
          data.title && (
            <div className="content">
              <div className="header clear"><h2><img src={this.props.data.detail.auth_icon} alt="" /></h2><p>{data.detail.auth}</p></div>
              <div className="cont">
                <h3>{data.title}</h3>
                <div className="time"><p>{this.context.appData}：{data.time}</p>
                </div>
                <div className="text-box" dangerouslySetInnerHTML={{ __html: data.detail.content }}></div>
              </div>
            </div>
          )
        }

      </React.Fragment>
    );
  }
  async componentDidMount() {
    this.context.setLoaDing(true)

    let id = this.props.match.params.id
    let dataName = querystring.parse(this.props.location.search).dataName
    let res = await axios({ url: `/mock/${dataName}/${id}` })
    console.log(res)
    this.setState({ data: res.data.page_data })

    this.context.setLoaDing(false)
  }
  componentDidMount(){
    let id = this.props.match.params.id;
    let dataName = querystring.parse(this.props.location.search).dataName;
    this.props.get({url: `/mock/${dataName}/${id}`,typename: 'UPDATE_DETAIL'})
  }
}

const State = state =>({
  data : state.detail
})

const Dispatch=dispatch=>({
  get:({url,params,typename})=>dispatch(axios1({
      dispatch,url,params,typename
  }))
})

export default connect(State,Dispatch)(Detail);