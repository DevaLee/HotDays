/**
 * Created by ritamashin on 2017/9/17.
 */
const  initialState = {
    input : {},
    flash : ''
}

export default (state = initialState, action) => {
    let {screenId, error} = action;
    switch (action.type){
        case 'ERROR_INPUT' :
            return {
                ...state,
                input: {
                    ...state.input,
                    [screenId] : {
                        ...(state.input[screenId] === undefined ? {} : state.input[screenId]),
                        ...error
                    }
                }
            }
        case 'RESET_ERROR_INPUT':
            if (screenId === undefined){
                return {
                    ...state,
                    input : initialState.input
                }
            }else {
                return {
                    ...state,
                    input : {
                        ...state.input,
                        [screenId] : initialState.input[screenId] || {}
                    }
                }
            }
        case 'ERROR_FLASH':
            return {
                ...state,
                flash: error
            };
        case 'RESET':
        case 'RESET_ERROR':
            return initialState;
        default:
            return state;
    }
}