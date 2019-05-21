import React, { Component } from 'react'
import '../assets/css/Cell.css'

class Cell extends Component {
    render() {
        return (
            <div className="padding1">
                <div className="ui-grid-c">
                    <div className="ui-block-a">
                        <a href="#" className="a1"><img src="images/icon1.png" /><br />点赞</a>
                    </div>
                    <div className="ui-block-b">
                        <a href="#" className="a1"><img src="images/icon2.png" /><br />评论</a>
                    </div>
                    <div className="ui-block-c">
                        <a href="#" className="a1"><img src="images/icon3.png" /><br />收藏</a>
                    </div>
                    <div className="ui-block-d">
                        <a href="#" className="a1"><img src="images/icon4.png" /><br />回复</a>
                    </div>
                </div>

                <div className="padding3">
                    <p className="size1">最新小说<a href="#" className="move">更多</a></p>
                    <div className="ui-grid-b">
                        <div className="ui-block-e">
                            <a href="#" className="ui-btn ui-corner-all ui-shadow img1"><img src="images/1.jpg" /><p>西西弗西行记</p></a>
                        </div>
                        <div className="ui-block-f">
                            <a href="#" className="ui-btn ui-corner-all ui-shadow img1"><img src="images/1.jpg" /><p>都市妖兽</p></a>
                        </div>
                        <div className="ui-block-g">
                            <a href="#" className="ui-btn ui-corner-all ui-shadow img1"><img src="images/1.jpg" /><p>湘西赶尸</p></a>
                        </div>
                    </div>
                </div>

                <div className="padding3">
                    <p className="size1">最新动漫<a href="#" className="move">更多</a></p>
                    <div className="ui-grid-b">
                        <div className="ui-block-e">
                            <a href="#" className="ui-btn ui-corner-all ui-shadow img1"><img src="images/1.jpg" /><p>斗罗大陆</p></a>
                        </div>
                        <div className="ui-block-f">
                            <a href="#" className="ui-btn ui-corner-all ui-shadow img1"><img src="images/1.jpg" /><p>天行九歌</p></a>
                        </div>
                        <div className="ui-block-g">
                            <a href="#" className="ui-btn ui-corner-all ui-shadow img1"><img src="images/1.jpg" /><p>小红帽</p></a>
                        </div>
                    </div>
                </div>

                <div className="padding3">
                    <p className="size1">爆笑校园<a href="#" className="move">更多</a></p>
                    <div className="ui-grid-b">
                        <div className="ui-block-e">
                            <a href="#" className="ui-btn ui-corner-all ui-shadow img1"><img src="images/1.jpg" /><p>豌豆先生</p></a>
                        </div>
                        <div className="ui-block-f">
                            <a href="#" className="ui-btn ui-corner-all ui-shadow img1"><img src="images/1.jpg" /><p>暴走漫画</p></a>
                        </div>
                        <div className="ui-block-g">
                            <a href="#" className="ui-btn ui-corner-all ui-shadow img1"><img src="images/1.jpg" /><p>爆笑虫子</p></a>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Cell;