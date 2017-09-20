/**
 * Created by ritamashin on 2017/9/17.
 */
const initialState = {
    users : {},
    posts : {},
    postComments : {},
    courts : {},
    files : {},
    userStats: {},
    postStats : {},
    courtsStats: {},
    fileStats: {}
};

export default (state = initialState, action) => {
    switch (action.type){
        case 'CACHE_OBJECTS':{
            let newState = Object.assign({}, state);
            // Object.entries 返回一个key value 数组
            for (let [k, v ] of Object.entries(action)){
                if (newState[k] === undefined){
                    continue
                }
                newState[k] = Object.assign({}, newState[k], v);
            }
            return newState;
        }
        case 'RESET':
        case 'RESET_OBJECT_CACHE':
            return initialState;
        default:
            return state;
    }
}
