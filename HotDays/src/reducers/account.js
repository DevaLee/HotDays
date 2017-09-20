/**
 * Created by ritamashin on 2017/9/17.
 */
const initialState = {
    id : undefined,
    setting : {
        'betaUser' : false,
        'city' : {
            'name' : '全国',
            'code' : ''
        },
        'sport' : {
            'name' : '网球',
            'code' : 'tennis',
        },
        'storage' : {
            'quota' : 1073741824,
            'usedAmountMonth': 0
        },
        'video' : {
            'autoPlay' :{
                'wifi' : true,
                'mobile' : true
            },
            'playRate' : {
                'wifi' : 'hd',
                'mobile' : 'ld'
            },
            'uploadRate' : {
                'wifi' : 'fhd',
                'mobile' : 'hd'
            }
        }
    }
}

export default (state = initialState, action) => {
    switch (action.type){
        case 'SET_ACCOUNT_USER' :
            let {id} = action;
            return {
                ...state,
                id
            };
        case 'SET_ACCOUNT_SETTINGS' :
            let {settings} = action;
            return {
                ...state,
                settings
            };
        case 'RESET':
        case 'RESET_ACCOUNT':
            return initialState;
        default:
            return state
    }
}