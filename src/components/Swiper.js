import React, { Component } from "react";

import '../assets/css/Swiper.css'
import $ from 'jquery';
import Swipe from '../library/swipe';

class Swiper extends Component {
    render() {
        return (
            <div className="banner">
                <ul className="clearfix">
                    <li><img src="/images/a1.jpg" alt="" /></li>
                    <li><img src="/images/a2.jpg" alt="" /></li>
                    <li><img src="/images/a3.jpg" alt="" /></li>
                </ul>
            </div>
        );
    }

    componentDidMount() {
        new Swipe($('.banner')[0], {
            auto: 2000,
            continuous: true,
            stopPropation: true,
            callback: function (index, element) {
                $('.banner ol li').removeClass('active');
                $('.banner ol li').eq(index).addClass('active');
            }
        })
    }
}

export default Swiper;