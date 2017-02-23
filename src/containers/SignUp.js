/**
 * Created by gellert on 2017/2/16.
 */
import React,{ PropTypes } from 'react'
import { connect } from 'react-redux'
import {isLogin} from '../actions/index'

import Form from '../components/Form'

class SignUp extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const {value, onClick} = this.props
        const signUp = [
            {
                label: "账号",
                type: "text"
            },
            {
                label: "密码",
                type: "text"
            }
        ]
        return(
            <div>
                <Form listItem={signUp}/>
                <button onClick={onClick}>a</button>
                <span>{value}</span>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        value: state ? 'true':'false',
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onClick: () => dispatch(isLogin())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SignUp)