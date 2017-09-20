/**
 * Created by ritamashin on 2017/9/17.
 */
const initialState = {
    position : undefined,
    city : undefined
};

export default (state = initialState, action) => {
    switch (action.type){
        case 'SET_LOCATION_POSITION':{
            let {position} = action;
            if (position){
                position.coords.longitude = Number(position.coords.longitude.toFixed(6));
                position.coords.altitude = Number(position.coords.altitude.toFixed(6));
                position.coords.latitude = Number(position.coords.latitude.toFixed(6));
            }
            return {
                ...state,
                position
            }
        }
        case 'SET_LOCATION_CITY':{
            let {city} = action;
            return {
                ...state,
                city
            }
        }
        case 'RESET_LOCATION' :{
            return initialState;
        }
        default :
            return state;
    }
}

