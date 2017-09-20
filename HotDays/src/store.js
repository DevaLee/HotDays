/**
 * Created by ritamashin on 2017/9/17.
 */
import {AsyncStorage} from 'react-native'
import {createStore ,compose,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {createLogger } from 'redux-logger'
import {autoRehydrate,persistStore  as reduxPersistStore } from 'redux-persist'
import {IN_DEBUGGER} from './config'
import reducer from './reducers'


const middlewares = [thunk];
if (IN_DEBUGGER){
    middlewares.push(createLogger({
        duration : true,
        collapsed : true
    }))
}

const store = createStore(reducer, undefined, compose(
    applyMiddleware(...middlewares),
    autoRehydrate()
))

export function persistStore(store, cbOk, cbFail) {
        reduxPersistStore(
            store,
            {
                blacklist : ['persist', 'loading','processing','error', 'network', 'location'],
                storage : AsyncStorage
            },
            (error, state) => {
                if (error){
                    cbFail(error)
                }else {
                    cbOk(state)
                }
            }
        )
}
export default store