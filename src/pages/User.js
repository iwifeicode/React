import React, { Component } from 'react'
import '../assets/css/User.css'

class User extends Component {
    render() {
        let { icon, nikename,follow,fans } = this.props.data;
        return (
            <div>
                <div className="top">
                    <div className="touxiang">
                        <a href="/login">
                            <img src={icon} alt="" />
                        </a>
                    </div>
                    <a href="">
                        <div className="yonghuming">{nikename}
                            <p>会员用户</p>
                        </div>
                    </a>
                    <ul className="clear">
                        <li className="lite">
                            <p>关注：</p>
                            <span>{follow}</span>
                        </li>
                        <li>
                            <p>粉丝：</p>
                            <span>{fans}</span>
                            
                        </li>
                    </ul>
                </div>

                <div className="dd dd1">
                    <a href="">我的服务</a>
                </div>
                <div className="dd2">
                    <a href="">
                        <img src="/images/icon_03.png" alt="" />拼团订单
                    </a>
                    <a href="">
                        <img src="/images/icon_05.png" alt="" />众筹订单
                    </a>
                    <a href="">
                        <img src="/images/icon_07.png" alt="" />邀请好友
                    </a>
                    <a href="">
                        <img src="/images/icon_09.png" alt="" />优惠券
                    </a>
                </div>
                <div className="dd2">
                    <a href="">
                        <img src="/images/icon_23.png" alt="" />金额
                    </a>
                    <a href="">
                        <img src="/images/icon_24.png" alt="" />钻戒
                    </a>
                    <a href="">
                        <img src="/images/icon_25.png" alt="" />足迹
                    </a>
                    <a href="">
                        <img src="/images/icon_26.png" alt="" />关注
                    </a>
                </div>
                
                <div className="dd2 dd3">
                    <a href="">
                        <img src="/images/con22 (1).png" alt="" />地址
                    </a>
                    <a href="">
                        <img src="/images/con22 (2).png" alt="" />客服
                    </a>
                    <a href="">
                        <img src="/images/con22 (3).png" alt="" />帮助
                    </a>
                    <a href="">
                        <img src="/images/con22 (4).png" alt="" />设置
                    </a>
                </div>

                <a className="tiaozhuan" href="javascript:;"><input type="button" name="button" value="退出" onClick={()=>{
                    localStorage.removeItem('rc_user');
                    this.props.history.push('/home')
                }}/></a>
                <div className="huanhang1 huanhang2"></div>
            </div>
        )
    }
}

export default User;