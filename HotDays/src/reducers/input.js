/**
 * Created by ritamashin on 2017/9/17.
 */
const initialState = {
    Login : {
        account : '',
        password : ''
    },
    ResetPassword : {
        account: '',
        password: '',
        code : ''
    },
    RegisterMobile : {
        mobile : '',
        password : ''
    },
    RegisterVerify : {
        code : '',
    },
    EditProfileNickName : {
        nickName : '',
    },
    EditProfileEmail :{
        email: '',
        code : ''
    },
    EditProfileAvatar :{
        avatarType : '',
        avatarName : '',
        avatarFile : null,
        avatarImage : null,
    },
    EditProfileIntro : {
        intro : ''
    },
    EditProfileBackground :{
        backgroundType : '',
        backgroundName : '',
        backgroundFile : null,
        backgroundImage : null
    }
}

export default (state = initialState, action) => {
    let {screenId, input} = action;
    switch (action.type){
        case 'INPUT':

            return {
                ...state,
                [screenId] : Object.assign({}, state[screenId], input)
            };
        case 'RESET_INPUT':
           // let {screenId} = action;
            if (screenId === undefined) {
                return initialState;
            }else {
                return {
                    ...state,
                    [screenId] : initialState[screenId]
                }
            }
        case 'RESET':
            return initialState;
        default :
            return state
    }
}