/**
 * Created by gellert on 2017/2/15.
 */
import React from 'react'
import ReactDom from 'react-dom'
import {Router, Route, browserHistory} from 'react-router'


import {Provider} from 'react-redux'
import {createStore} from 'redux'
import isLogin from './reducers/index'

import './style/scss/main.scss'

import SignUp from './containers/SignUp'
import Index from './containers/Index'

const store = createStore(isLogin,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDom.render((
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={SignUp}></Route>
            <Route path="/about" component={Index}/>
        </Router>
    </Provider>
), document.getElementById("root"))