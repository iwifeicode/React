import React,{Component} from 'react'
import propTypes from 'prop-types';

class ComponentContext extends Component{
    state={
        msg:"数据"
    };

    setMsg = (data) => {this.setState({msg:data})}

    //类属性  定义子上下文类型(可以是state数据，可以是实例方法)
    static childContextTypes={
        msg:propTypes.string,
        setMsg:propTypes.func
    };

    getChildContext(){  //返回上下文对象
        return{
            msg:this.state.msg,
            setMsg:this.setMsg
        }
    }

    render(){
        return(
            <div>
                <h3>上层组件</h3>
                <h3>context</h3>
                <A/>
            </div>
        )
    }
}

class A extends Component{
    render(){
        return(
            <div>
                <h3>A组件</h3>
                <B/>
            </div>
        )
    }
}

class B extends Component{

    static contextTypes={
        msg:propTypes.string,
        setMsg:propTypes.func
    }

    render(){
        return(
            <div>
                <h3>B组件</h3>
                <div>{this.context.msg}</div>
                <input type='button' value="修改上下文" onClick={()=>{
                    this.context.setMsg('修改后的数据')
                }}/>
            </div>
        )
    }
}

export default ComponentContext;