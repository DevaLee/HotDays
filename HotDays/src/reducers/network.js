/**
 * Created by ritamashin on 2017/9/17.
 */
const initialState ={
    reach : undefined,
    isConnected : undefined,
};

export default (state = initialState, action) => {
    switch (action.type){
        case 'SET_NETWORK':{
            let {...newState} = action;
            delete newState.type;
            return Object.assign({}, state, newState);
        }
        case 'RESET_NETWORK': {
            return initialState;
        }
        default:{
            return state;
        }
    }
}