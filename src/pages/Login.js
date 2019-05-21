import React, { Component } from 'react'
import '../assets/css/Login.css'

import { Link } from 'react-router-dom'

import axios from 'axios'

class Login extends Component {

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
            url:"/mock/login",
            params:{
                username:this.state.username,
                password:this.state.password
            }
        })
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
            <div className='Login'>
                <div className="dl-top">
                    <Link to='/reg' className="left">×</Link>
                    {/* <a href="/reg" class="left"> × </a> */}
                    <div className="center">登陆</div>
                </div>
                <input type="email" name="username" value={this.state.username} onChange={this.changeIpt} placeholder="账号" />
                <input type="password" name="password" value={this.state.password} onChange={this.changeIpt} placeholder="密码" />
                <a className="tiaozhuan" href="javascript:;"><input type="button" name="button" value="登陆" onClick={this.submit} /></a>
                <div className="last">
                    <Link to='/reg' className="zhleft">注册账号</Link>
                    {/* <a href="/reg" class="zhleft">注册账号</a> */}
                    <a href="" className="zhright">忘记密码</a>
                </div>

            </div>
        )
    }
}

export default Login;