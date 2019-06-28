import * as $ from 'jquery';
import React from 'react';
import WeatherBlock from './components/WeatherBlock';

class App extends React.Component {

  state = {
    weather: undefined,
    dataInfo: {
      isReady: undefined,
      isOk: undefined
    }
  };

  getWeather = async (event) => {

    try {
      event.preventDefault();

      this.setState({
        dataInfo: {
          isReady: false,
          isOk: undefined
        }
      });

      const API_KEY = "a078070d87bfadcc95fcc5c5904fad04";

      const UNIT = 'metric';
      const CITY = event.target.elements.city.value;

      const CORS_URL = 'https://cors-anywhere.herokuapp.com/';
      const URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&units=${UNIT}&appid=${API_KEY}&lang=ro`

      const NOW_WEATHER = await fetch(CORS_URL + URL)
        .then(async (res) => {
          if (res.status !== 200) {
            throw new Error("Not 200 response, it's unable to find the city")
          }
          else {
            return await res.json();
          }
        })
        .catch(err => {
          console.error(err);
        });


      console.log(NOW_WEATHER);

      this.setState({
        weather: NOW_WEATHER,
        dataInfo: {
          isReady: true
        }
      });

      // check if it got the data without getting an error
      if (NOW_WEATHER.cod != '404') {
        this.setState({
          dataInfo: {
            isReady: true,
            isOk: true
          }
        });
      }
      else {
        this.setState({
          dataInfo: {
            isReady: true,
            isOk: false
          }
        });
      }
    }
    catch (err) {
      console.log(err);
    }
  };
  render() {
    return (
      <div>
        <React.StrictMode>
          <WeatherBlock
            getWeather={this.getWeather}
            weather={this.state.weather}
            dataInfo={this.state.dataInfo}
          />
        </React.StrictMode>
      </div>
    );
  }
}

export default App;