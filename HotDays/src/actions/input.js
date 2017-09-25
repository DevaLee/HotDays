/**
 * Created by ritamashin on 2017/9/24.
 */

import valid from 'validate.js'
import * as actions from './'

export function saveInput (screenId, input) {
    return dispatch => {
        dispatch({
            type : 'INPUT',
            screenId,
            input,
        })
        dispatch(validateInput(screenId, input))
    }
}
// screenId = 'Login'
// input =  {account : ''}
export function validateInput(screenId, input, cbOk) {
    return dispatch => {
        let error = {}
        // k = 'account'  v = '123'
        Object.entries(input).forEach(([k,v]) => {
            if (constrains[screenId] && constrains[screenId][k]){
                error[k] = valid.single(v, constrains[screenId][k]) || []
            }else {
                error[k] = [];
            }
        })

        dispatch(actions.errorInput(screenId, error));

        if(Object.values(error).every(v => v.length === 0)){
            if (cbOk){
                cbOk()
            }
        }
    }
}

let accountConstrains ={
    presence : {
        message : '请输入账号'
    }
}

let passwordConstrains = {
    length : {
        minimum : 6,
        message:'密码长度至少为6'
    }
}
let constrains = {
    Login :{
        account : accountConstrains,
        password : passwordConstrains
    }
}