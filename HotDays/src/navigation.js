/**
 * Created by ritamashin on 2017/9/18.
 */
import React, {Component} from 'react'
import {StackNavigator, TabNavigator} from 'react-navigation'
import {COLOR} from './config'
import * as components  from './component'




export const AppNavigator = StackNavigator(
    {
        PreLogin : {screen : components.PreLogin},
        Login : {screen : components.Login}
    },

    {
        initialRoute: 'PreLogin'
    }
)
