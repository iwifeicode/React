import React, { Component } from "react";
import '../assets/css/Detail.css'

import axios from 'axios'
import querystring from 'query-string'

class Detail extends Component {

  state = {
    data: {}
  }

  render() {
    let data = this.state.data
    console.log(data)
    return (
      <div className="Detail">
        <div className="nav">
          <ul>
            <li className="l-btn" onClick={() => this.props.history.go(-1)}></li>
          </ul>
        </div>
        {
          data.title && (
            <div className="content">
              <div className="header clear"><h2><img src={this.state.data.detail.auth_icon} alt="" /></h2><p>{data.detail.auth}</p></div>
              <div className="cont">
                <h3>{data.title}</h3>
                <div className="time"><p>时间：{data.time}</p>
                </div>
                <div className="text-box" dangerouslySetInnerHTML={{ __html: data.detail.content }}></div>
              </div>
            </div>
          )
        }

      </div>
    );
  }
  async componentDidMount() {
    let id = this.props.match.params.id
    let dataName = querystring.parse(this.props.location.search).dataName
    let res = await axios({ url: `/mock/${dataName}/${id}` })
    console.log(res)
    this.setState({ data: res.data.page_data })
  }
}

export default Detail;