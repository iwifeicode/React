import React, { Component } from 'react'
import '../assets/css/Reg.css'

import {Link} from 'react-router-dom'

import axios from 'axios'

class Reg extends Component {

    state={
        username:'',
        password:''
    }
    changeIpt = (ev) =>{
        this.setState({
            [ev.target.name]:ev.target.value
        })
    }
    submit = async ()=>{
        let res = await axios({
            url:'/mock/reg',
            params:{
              username:this.state.username,
              password:this.state.password
            }
          });
      
          // console.log(res)
          if (res.data.error===0){
            //写入local && 跳转user
            localStorage.setItem('rc_user',JSON.stringify(res.data.page_data))
            this.props.history.push('/user')
          } else {
            alert('失败')
          }
    }

    render() {
        return (
            <div className='Reg'>
                <div className="dl-top">
                    <Link to='/login' className='left'>×</Link>
                    {/* <a href="/login" class="left"> × </a> */}
                    <div className="center">注册</div>
                </div>
                <input type="email" name="username" value={this.state.username} onChange={this.changeIpt}  placeholder="账号" />
                <input type="password" name="password" value={this.state.password} onChange={this.changeIpt}  placeholder="密码" />
                <a className="tiaozhuan" href="javascritp:;"><input type="button" name="button" value="注册" onClick={this.submit}/></a>
                <div className="last">
                    <i className="iconfont icon-gantanhao"></i>&nbsp;
                    <Link to="/login">如果您已注册,请直接登陆。</Link>
			        {/* <a href="/login" class="">如果您已注册,请直接登陆。</a> */}
                </div>

            </div>
        )
    }
}

export default Reg;