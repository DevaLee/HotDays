/**
 * Created by ritamashin on 2017/9/18.
 */
const  initialState = {
    nearby : []
};

export default (state = initialState, action) => {
    switch (action.type){
        case 'SET_NEARBY_USERS':{
            let {userIds} = action
            return {
                ...state,
                nearby: userIds
            }
        }
        case 'RESET':
        case 'RESET_USER':
            return initialState;
        default :
            return state;


    }
}