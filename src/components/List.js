import React, { Component } from 'react'
import '../assets/css/list.css'

import { Link } from 'react-router-dom'

class List extends Component {
    render() {
        let { lists, dataName } = this.props;
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
                            <h2>{item.id}.{item.title}</h2>
                            <p>{item.des}</p>
                        </Link>
                    ))
                }

            </div>
        )
    }
}

export default List;