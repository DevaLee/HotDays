/**
 * Created by ritamashin on 2017/9/19.
 */
export function resetLoading () {
    return {
        type : 'RESET_LOADING'
    }
}

export function loadingStart(prompt) {
    return {
        type: 'LOADING_START',
        prompt
    }
}

export function loadingEnd() {
    return {
        type : 'LOADING_END',
    }
}

export function enabledLoading() {
    return {
        type : 'ENABLE_LOADING'
    }
}

export function disabledLoading() {
    return {
        type : 'DISABLE_LOADING'
    }
}

