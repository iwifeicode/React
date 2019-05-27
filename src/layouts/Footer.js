import React,{Component} from "react";

// import propTypes from 'prop-types'

import style from  '../assets/css/Footer.module.css'

import { NavLink,withRouter } from 'react-router-dom'

class Footer extends Component {

  // static contextTypes = {
  //   appData: propTypes.string,
  // };
  // componentDidMount(){
  //   console.log("footer组件上下文:",this.context.appData)
  // }

  render() {
    return (
      <div className={style.nav}>
        <ul>
          <li>
            <NavLink to="/home" activeClassName={style.active}>首页</NavLink>
          </li>
          <li>
            <NavLink to="/column" activeClassName={style.active}>分类</NavLink>
          </li>
          <li>
            <NavLink to="/follow" activeClassName={style.active}>热点</NavLink>
          </li>
          <li>
            <NavLink to="/user" activeClassName={style.active}>我的</NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default withRouter(Footer);