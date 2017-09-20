/**
 * Created by ritamashin on 2017/9/17.
 */
const initialState = {
    nearby : [],
    byCity : {}
};

export default (state = initialState, action) =>{
    switch (action.type){
        case 'SET_NEARBY_POSTS':{
            let {postIds} = action;
            return {
                ...state,
                nearby: postIds
            }
        }
        case 'APPEND_NEARBY_POSTS':{
            let {postIds} = action;
            return {
                ...state,
                nearby : state.nearby.concat(postIds)
            }
        }
        case 'SET_POSTS_OF_CITY':{
            let {postIds, cityCode} = action
            return {
                ...state,
                byCity: Object.assign({}, state.byCity, {[cityCode]: postIds})
            }
        }
        case 'APPEND_POSTS_OF_CITY':{
            let {cityCode, postIds} = action
            postIds = (state.byCity[cityCode] || []).concat(postIds)
            return {
                ...state,
                byCity: Object.assign({}, state.byCity, {[cityCode]: postIds})
            }
        }
        case 'RESET':
        case 'RESET_POST':
            return initialState;
        default:
            return state;
    }
}