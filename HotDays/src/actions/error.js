/**
 * Created by ritamashin on 2017/9/24.
 */
import logger from '../logger'
import {InputError, ApiHttpError} from '../error'


export function resetError() {
    return {
        type : 'RESET_ERROR'
    }
}


export function errorInput(screenId, error) {
    return {
        type: 'ERROR_INPUT',
        screenId,
        error

    }
}