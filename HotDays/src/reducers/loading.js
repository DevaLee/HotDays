/**
 * Created by ritamashin on 2017/9/17.
 */
const initialState = {
    loadingCount : 0,
    prompt : undefined,
    enable : true,
};

export default (state = initialState, action) => {
    switch (action.type){
        case 'LOADING_START':{
            let {prompt} = action;
            return {
                ...state,
                loadingCount: (state.count + 1),
                prompt : prompt,
            }
        }
        case 'LOADING_END' :{
            return {
                ...state,
                loadingCount : (state.count - 1),
                prompt : undefined
            }
        }
        case 'ENABLE_LOADING':{
            return {
                ...state,
                enable: true,
            }
        }
        case 'DISABLE_LOADING': {
            return {
                ...state,
                enable : false
            }
        }
        case 'RESET':
        case 'RESET_LOADING':{
            return initialState;
        }
        default :
            return state;
    }
}