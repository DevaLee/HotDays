/**
 * Created by ritamashin on 2017/9/17.
 */
const initialState = {
    env : 'production'
}

export default (state = initialState, action) => {

    switch (action.type){
        case 'SET_APP_ENV':
            let {env} = action
            return{
                ...state,
                env
            };
        case 'RESET':
        case 'RESET_APP':
            return initialState;
        default :
            return state;
    }
}