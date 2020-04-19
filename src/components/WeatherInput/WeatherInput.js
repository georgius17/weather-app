import React, {Component} from 'react';
import classes from './WeatherInput.module.css'
import AlgoliaPlaces from 'algolia-places-react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class WeatherInput extends Component {
    render(){
        return (
        <div className={classes.Input}>
            <AlgoliaPlaces
            placeholder="Choose your place"
            options={{
                appId:'pl4IFRDT6XET',
                apiKey:'9290d3070bea96a40b5af176775b93be',
                language:'en',
                type:'city'
            }}

            onChange={({ query, rawAnswer, suggestion, suggestionIndex }) => {
                console.log(suggestion);
                this.props.onNewPlace(suggestion.name, suggestion.countryCode)
            }
                
            }
            />
        </div> 
        )
    }
} 

const mapDispatchToProps = dispatch => {
  return {
      onNewPlace: (place, code) => dispatch(actions.newPlace(place, code))
      
  }
}


export default connect(null, mapDispatchToProps)(WeatherInput);