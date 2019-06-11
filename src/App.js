import React from 'react';
import WeatherBlock from './components/WeatherBlock';
import * as $ from 'jquery';
import { async } from 'q';

const API_KEY = "tGRkU6k4fIGjALXgBCqBTNrFKRvWOKhf";

class App extends React.Component {

  getWeather = async (event) => {
    event.preventDefault();

    const CITY = $("#cityInput").val();

    console.log(CITY);

    const api_call_getCity = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${API_KEY}&q=${CITY}`);
    const data_getCity = await api_call_getCity.json();

    console.log(data_getCity);

    const api_call_getForecast = await fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${data_getCity[0].Key}?apikey=${API_KEY}&metric=true`);
    const data_getForecast = await api_call_getForecast.json();

    console.log(data_getForecast);
  };
  render() {
    return (
      <div>
        <WeatherBlock getWeather={this.getWeather} />
      </div>
    );
  }
}

export default App;