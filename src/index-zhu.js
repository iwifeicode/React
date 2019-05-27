import React, { Component } from 'react';
import ReactDom from 'react-dom';

//引入主组件
import App from './layouts/App'

//1.引入路由依赖：依赖安装 yarn add react-router-dom --save
import { BrowserRouter } from 'react-router-dom';

//基础样式引入
import './assets/css/base.css';

//引入字体
import './library/font'

ReactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  ,
  document.getElementById('root')
);