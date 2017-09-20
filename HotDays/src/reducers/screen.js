/**
 * Created by ritamashin on 2017/9/18.
 */

const initialState = {
    lastRefreshTime : {},
    RegisterVerify: {
        secondsToSend : 0,
    },
    ResetPassword: {
        secondsToSend: 0,
    },
    RegisterProfile: {
        showProfileGender: false,
    },
    Nearby: {
        refreshing : false,
        showCityAndSupport : false,
    },
    AtCourt : {
        refreshing: false,
    },
    Me : {
        refreshing : false,
    },

    EditProfile: {
        showProfileGender: false,
    },
    EditProfileEmail :{
        secondsToSend : 0,
    },
    Album : {
        files : []
    }
}

export default (state = initialState, action) => {
    switch (action.type){
        case 'SET_SCREEN_STATE':
        {
            let {screenId, screenState} = action
            return {
                ...state,
                [screenId] : Object.assign({}, state[screenId],screenState)
            }
        }
        case 'SET_SCREEN_LAST_REFRESH_TIME':{
            let {screenId, lastRefreshTime, ObjectId} = action;
            let screenLastRefreshTime = state.lastRefreshTime[screenId] || {}
            screenLastRefreshTime = Object.assign({}, screenLastRefreshTime,{[ObjectId] : lastRefreshTime})
            return {
                ...state,
                lastRefreshTime : Object.assign({}, state.lastRefreshTime,{[screenId] : screenLastRefreshTime})
            }
        }
        case 'RESET_SCREEN_STATE':{
            let {screenId} = action;
            if (screenId === undefined){
                return initialState;
            }else {
                return {
                    ...state,
                    [screenId] : initialState[screenId]
                }
            }
        }
        case 'RESET_SCREEN_LAST_REFRESH_TIME': {
            return {
                ...state,
                lastRefreshTime : initialState.lastRefreshTime
            }
        }
        case 'RESET':{
            return initialState;
        }
        default :
            return state;
    }
}