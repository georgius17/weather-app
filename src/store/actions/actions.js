import * as actionTypes from './actionTypes';
import axios from 'axios';

export const setNewPlace = (place)=> {
    return {
        type:actionTypes.SET_PLACE,
        place: place
    };
};

export const setNewPlaceFail = (error) => {
    return {
        type: actionTypes.SET_PLACE_FAIL,
        error: error
    };
};

export const setNewPlaceStart = () => {
    return {
        type: actionTypes.SET_PLACE_START
    };
};

export const setUnits = () => {
    return {
        type: actionTypes.SET_UNITS
    };
};

export const newPlace = (place, code)=>{
    return dispatch => {
        console.log(place, code)
        dispatch(setNewPlaceStart())
        axios.get('https://api.openweathermap.org/data/2.5/weather?q='+place+','+code+'&appid=84dff302558be91ca0e5cbe998a8c827&units=metric')
            .then(response => {
                const place = response.data;
                dispatch(setNewPlace(place))
            })
            .catch(error => {
                dispatch(setNewPlaceFail(error))
            })
    }
}










