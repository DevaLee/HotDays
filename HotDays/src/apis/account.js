/**
 * Created by ritamashin on 2017/9/19.
 */
import {getApi, postApi} from './common'

export function register({userName = '',mobile = '',password, code}) {
    return postApi('/register',{userName, mobile, password, code});
}

export function login({userName = '', mobile = '', email = '', password}) {
    return getApi('./login',{userName, mobile, email, password});
}