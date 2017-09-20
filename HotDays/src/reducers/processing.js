/**
 * Created by ritamashin on 2017/9/18.
 */
const initialState = {
    task : ''
}

export default (state = initialState, action) => {
    switch (action.type){
        case 'PROCESSING_TASK':
             let  {task} = action;
             return {
                 ...state,
                 task
             };
        case 'RESET':
        case 'RESET_PROCESSING':
            return initialState;
        default :
            return state;
    }
}