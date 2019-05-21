import React,{Component} from "react";
import style from  '../assets/css/Footer.module.css'

import { NavLink } from 'react-router-dom'

class Footer extends Component {
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

export default Footer;