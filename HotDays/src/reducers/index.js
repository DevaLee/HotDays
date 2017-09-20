/**
 * Created by ritamashin on 2017/9/18.
 */

import {combineReducers} from 'redux'

import app from './app'
import account from './account'
import error from './error'
import input from './input'
import loading from './loading'
import location from './location'
import network from './network'
import object from './object'
import persist from './persist'
import player from './player'
import post from './post'
import processing from './processing'
import screen from './screen'
import store from './store'
import user from './user'

export default combineReducers({
    app,
    account,
    error,
    input,
    loading,
    location,
    network,
    object,
    persist,
    player,
    post,
    processing,
    screen,
    store,
    user
})