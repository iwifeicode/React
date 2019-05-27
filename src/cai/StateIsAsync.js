// import React, { Component } from 'react'

// import axios from 'axios'

// export default class StateIsAsync extends Component {

//     state={
//         ipt:'',
//     };

//     render() {
//         return (
//             <>
//                <h3>setState是异步</h3>
//                <input type='text' value={this.state.ipt} onChange={this.change}/>
//             </>
//         )
//     }

//     change=async(ev)=>{
//         this.setState,({ipt:ev.target.value});
        
//         let res = await axios({url:'/mock/home/'+ev.target.value})
//         console.log(res.data)
//     }
// }
