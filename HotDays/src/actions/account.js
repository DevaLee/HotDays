/**
 * Created by ritamashin on 2017/9/19.
 */
import {ApiResultError, ERROR_CODE_DUPLICATED, ERROR_CODE_NOT_FOUND,
ERROR_CODE_WRONG_PASSWORD, ERROR_CODE_INVALID_VERIFY_CODE} from '../error'

import * as apis from '../apis'
import * as actions from './'

export function login({userName, mobile, email, password, cbOk}) {
    return dispatch => {
        apis.login({userName, mobile, email, password, cbOk})
            .then(response => {
                let {data : {user, settings}} = response
                console.log({data : {user, settings}});
                if (cbOk){
                    cbOk();
                }
            })
            .catch(error => dispatch(actions.handelError(error)))
    }
}
