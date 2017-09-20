/**
 * Created by ritamashin on 2017/9/17.
 */
const initialState = {
    rehydrated : false
};

export default (state = initialState, action) => {
    switch (action.type){
        case 'SET_PERSIST_REHYDRATED':{
            let {rehydrated} = action;
            return {
                ...state,
                rehydrated
            }
        }
        case 'RESET_PERSIST': {
            return initialState;
        }
        default :
            return state;
    }
}