/**
 * Created by ritamashin on 2017/9/17.
 */
const initialState = {
    opBarHidden : false,
    orientation : 'PORTRAIT',
    isBuffering : false,
    loaded : false,
    paused : false,
    ended : false,
    rate : undefined,
    rateSelectorVisible : false,
    src : undefined,
    naturalSize : undefined,
    duration : 0,
    playableDuration:0,
    currentTime : 0,
}

export default (state = initialState, action) => {
    switch (action.type){
        case 'SET_PLAYER_STATE':{
            let {...newState} = action;
            delete newState.type
            newState = Object.assign({},state, newState)
            newState.currentTime = Math.min(newState.currentTime, newState.duration);
            return newState;
        }
        case 'RESET':
        case 'RESET_PLAYER_STATE':{
            return initialState;
        }
        default :{
            return state;
        }
    }
}