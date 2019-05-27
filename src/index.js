import React from 'react';
import ReactDom from 'react-dom';

//引入主组件

//1.引入路由依赖：依赖安装 yarn add react-router-dom --save
import {Provider} from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
console.log(Provider)
import App from './layouts/App'
//基础样式引入
import './assets/css/base.css';

//引入字体
import './library/font'


import store from './store';
console.log()
// import date from './api/date'
// React.Component.prototype.date = date

//取local存state
let  local = JSON.parse(localStorage.getItem('rc_user'));
local && store.dispatch({type:'UPDATE_USER',payload:local})

ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route component={App} />
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);