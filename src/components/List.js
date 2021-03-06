import React, { Component } from 'react'
import '../assets/css/List.css'

import { Link } from 'react-router-dom'

// class List extends Component {
//     render() {
//         let { lists, dataName } = this.props;
//         return (
//             <div className='tezi'>
//                 {
//                     lists.map(item => (
//                         <Link
//                             className='list'
//                             key={item.id}
//                             to={{
//                                 pathname: '/detail/' + item.id,
//                                 search: "?dataName=" + dataName
//                             }}
//                         >
//                             <h2>{item.id}.{item.title}</h2>
//                             <p>{item.des}</p>
//                         </Link>
//                     ))
//                 }

//             </div>
//         )
//     }
// }

// 复用的类组件，改装成函数组件
let List = (props) => {
    let { lists, dataName } = props
    return (
        <div className='tezi'>
            {
                lists.map(item => (
                    <Link
                        className='list'
                        key={item.id}
                        to={{
                            pathname: '/detail/' + item.id,
                            search: "?dataName=" + dataName
                        }}
                    >
                        <div className='cont'>
                            <img src={item.detail.auth_icon} className='imgs' />
                            <div className='float'>
                                <h2>{item.title}</h2>
                                <p>{item.des}</p>
                            </div>
                            <p className='pp'>{item.time}</p>
                        </div>
                    </Link>
                ))
            }

        </div>
    )
}

export default List;