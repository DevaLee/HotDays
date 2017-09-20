/**
 * Created by ritamashin on 2017/9/17.
 */

import React, {Component} from 'react'
import {Provider} from 'react-redux'

import store from './store'
import {AppNavigator } from './navigation'

export default class App extends Component{
    render(){
        return (
            <Provider store={store}>
                <AppNavigator/>
            </Provider>
        )
    }
}