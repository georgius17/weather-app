import React from 'react';
import classes from './WeatherReveal.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTint, faWind, faCompress } from '@fortawesome/free-solid-svg-icons';

const weatherReveal = (props) => {
    let viewedUnits = props.units ? '°C' : '°F';
    return (
        <div className={classes.Reveal} >
            <h3> {props.placeName} </h3>
            <h5> {props.currentDay} {props.currentTime} </h5>
            <img alt='Place status icon' className={classes.Status} src={'http://openweathermap.org/img/wn/'+props.placeIcon+'@2x.png'} />
            <h5> {props.placeStatus} </h5> 
            <h1> {(props.placeTemp).toFixed(1) } {viewedUnits} </h1>
            <h5> Feels like  {(props.placeTempFeel).toFixed(1)} {viewedUnits} </h5>
            <h5> Min {(props.placeTempMin).toFixed(1)} {viewedUnits} Max {(props.placeTempMax).toFixed(1)} {viewedUnits} </h5>
            <div className={classes.IconDiv} >
                <FontAwesomeIcon className={classes.Icon}  icon={faTint} />
                <p> {props.placeHumidity} % </p>
            </div>
            <div className={classes.IconDiv} >
                <FontAwesomeIcon className={classes.Icon} icon={faWind} />
                <p> {(props.placeWind*3.6).toFixed(2)} km/h </p>
            </div>
            <div className={classes.IconDiv} >
                <FontAwesomeIcon className={classes.Icon} icon={faCompress} />
                <p> {props.placePressure} Pa </p>
            </div>
            
            
            <div className={classes.Handler} >
                <button onClick={props.clicked} className={classes.Button} >°C / °F </button>
            </div>
        </div>
    )
}



export default weatherReveal