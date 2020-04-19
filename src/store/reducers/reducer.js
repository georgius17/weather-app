import * as actionTypes from '../actions/actionTypes';

const initialState = {
    place: null,
    loading: false,
    units: true,
    date: null
}

const DAYS = {
    1:'MON',
    2:'TUE',
    3:'WDN',
    4:'THR',
    5:'FRI',
    6:'SAT',
    0:'SUN'
}

const reducer = (state=initialState, action) => {
    switch (action.type){
        case actionTypes.SET_PLACE:
            let today = new Date()
            let zero = today.getMinutes().length < 2 ? "0" : ""
            let dateFormated = {
                day: DAYS[today.getDay()],
                time: today.getHours() + ":" +zero+ today.getMinutes() + ":" + today.getSeconds()
            }
            return {
                ...state,
                place: action.place,
                date: dateFormated,
                loading: false
            }
        case actionTypes.SET_PLACE_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.SET_PLACE_FAIL:
            return {
                ...state,
                loading: false
            }
        case actionTypes.SET_UNITS:
            return {
                ...state,
                units: !state.units
            }
        default:
            return state
    }
};

export default reducer;