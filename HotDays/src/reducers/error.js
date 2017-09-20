/**
 * Created by ritamashin on 2017/9/17.
 */
const  initialState = {
    input : {},
    flash : ''
}

export default (state = initialState, action) => {
    switch (action.type){
        // case 'ERROR_INPUT' :
        //     let {screenId, error} = action;
        //     return {
        //         ...state,
        //         input: {
        //             ...state.input,
        //             [screenId] : {
        //                 ...(state.input[screenId] === undefined ? {} : state.input[screenId]),
        //                 ...error
        //             }
        //         }
        //     }
        // case 'RESET_ERROR_INPUT':
        //     let {screenId} = action;
        //     if (screenId === undefined){
        //         return {
        //             ...state,
        //             input : initialState.input
        //         }
        //     }else {
        //         return {
        //             ...state,
        //             input : {
        //                 ...state.input,
        //                 [screenId] : initialState.input[screenId] || {}
        //             }
        //         }
        //     }
        // case 'ERROR_FLASH':
        //     let {error} = action;
        //     return {
        //         ...state,
        //         flash: error
        //     };
        case 'RESET':
        case 'RESET_ERROR':
            return initialState;
        default:
            return state;
    }
}