/**
 * Created by gellert on 2017/2/16.
 */
import {IS_LOGIN} from '../actions/index'

function isLogin(state = false, action) {
    switch (action.type){
        case IS_LOGIN:
            return !state
        default:
            return state
    }
}

export default isLogin