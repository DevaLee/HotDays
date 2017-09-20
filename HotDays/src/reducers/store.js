/**
 * Created by ritamashin on 2017/9/18.
 */
const  initialState = {
    version: undefined
};

export default (state = initialState, action) => {
    switch (action.type){
        case 'SET_STORE_VERSION':{
            let {version} = action
            return {
                ...state,
                version
            }
        }
        case 'RESET':
        case 'RESET_STORE':{

            return initialState;
        }
        default :
            return state;
    }
}