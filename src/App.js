import React, {Component} from 'react';
import { connect } from 'react-redux';
import Layout from './containers/Layout/Layout';
import WeatherInput from './components/WeatherInput/WeatherInput';
import WeatherReveal from './components/WeatherReveal/WeatherReveal';
import Loader from './UI/Loader/Loader'
import * as actions from './store/actions/index';
import './App.css';

class App extends Component {
  
  temperatureConverter = (status, value) => {
    //false state for Fahr, true for Celsius(default)
    if(!status){
      return value*1.8000+32.00
    } else {
        return value
      }
    }

  render(){
    let show = null;
    if (this.props.loading == true){
      show = <Loader />
    } else if (this.props.place == null){
      show = <Loader />
      this.props.onNewPlace('Brno','cz')
    }
     else {
      show = <WeatherReveal
          currentDay={this.props.date.day} 
          currentTime={this.props.date.time}
          placeName={this.props.place.name}
          placeIcon={this.props.place.weather[0].icon}
          placeStatus={this.props.place.weather[0].description}
          placeTemp={this.temperatureConverter(this.props.units, this.props.place.main.temp) }
          placeTempFeel={ this.temperatureConverter(this.props.units, this.props.place.main.feels_like) }
          placeTempMin={this.temperatureConverter(this.props.units, this.props.place.main.temp_min)}
          placeTempMax={this.temperatureConverter(this.props.units, this.props.place.main.temp_max)}
          placeHumidity={this.props.place.main.humidity}
          placeWind={this.props.place.wind.speed}
          placePressure={this.props.place.main.pressure}
          clicked={()=>this.props.onSetUnits()}
          units={this.props.units}
        />
    }

    return (
      <Layout>
       <WeatherInput />
       {show}
      </Layout>
    )
  }
} 

const mapStateToProps = state => {
  return {
    place: state.place,
    loading: state.loading,
    units: state.units,
    date: state.date
  }
}

const mapDispatchToProps = dispatch => {
  return {
      onNewPlace: (place, code) => dispatch(actions.newPlace(place, code)),
      onSetUnits: () => dispatch(actions.setUnits())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

