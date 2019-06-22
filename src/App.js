import React from 'react';
import WeatherBlock from './components/WeatherBlock';

const API_KEY = "tGRkU6k4fIGjALXgBCqBTNrFKRvWOKhf";

class App extends React.Component {

  state = {
    headlineText: undefined,
    headlineCategory: undefined,
    Day: [{
      hasPrecipitation: undefined,
      minimumTemperature: undefined,
      maximumTemperature: undefined,
      dayIcon: undefined,
      dayIconPhrase: undefined,
      dayPrecipitationType: undefined,
      dayPrecipitationIntensity: undefined,
      nightIcon: undefined,
      nightIconPhrase: undefined,
      nightHasPrecipitation: undefined,
      nightPrecipitationType: undefined,
      nightPrecipitationIntensity: undefined
    },
    {
      hasPrecipitation: undefined,
      minimumTemperature: undefined,
      maximumTemperature: undefined,
      dayIcon: undefined,
      dayIconPhrase: undefined,
      dayPrecipitationType: undefined,
      dayPrecipitationIntensity: undefined,
      nightIcon: undefined,
      nightIconPhrase: undefined,
      nightHasPrecipitation: undefined,
      nightPrecipitationType: undefined,
      nightPrecipitationIntensity: undefined
    },
    {
      hasPrecipitation: undefined,
      minimumTemperature: undefined,
      maximumTemperature: undefined,
      dayIcon: undefined,
      dayIconPhrase: undefined,
      dayPrecipitationType: undefined,
      dayPrecipitationIntensity: undefined,
      nightIcon: undefined,
      nightIconPhrase: undefined,
      nightHasPrecipitation: undefined,
      nightPrecipitationType: undefined,
      nightPrecipitationIntensity: undefined
    },
    {
      hasPrecipitation: undefined,
      minimumTemperature: undefined,
      maximumTemperature: undefined,
      dayIcon: undefined,
      dayIconPhrase: undefined,
      dayPrecipitationType: undefined,
      dayPrecipitationIntensity: undefined,
      nightIcon: undefined,
      nightIconPhrase: undefined,
      nightHasPrecipitation: undefined,
      nightPrecipitationType: undefined,
      nightPrecipitationIntensity: undefined
    },
    {
      hasPrecipitation: undefined,
      minimumTemperature: undefined,
      maximumTemperature: undefined,
      dayIcon: undefined,
      dayIconPhrase: undefined,
      dayPrecipitationType: undefined,
      dayPrecipitationIntensity: undefined,
      nightIcon: undefined,
      nightIconPhrase: undefined,
      nightHasPrecipitation: undefined,
      nightPrecipitationType: undefined,
      nightPrecipitationIntensity: undefined
    }
    ]
  };

  getWeather = async (event) => {
    event.preventDefault();

    const city = event.target.elements.city.value;

    const api_call_getCity = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${API_KEY}&q=${city}`);
    const data_getCity = await api_call_getCity.json();

    let api_call_getForecast;
    try {
      api_call_getForecast = await fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${data_getCity[0].Key}?apikey=${API_KEY}&metric=true`);
    }
    catch{
      console.error("gion1");
    }

    const data_getForecast = await api_call_getForecast.json();
    try {
      this.setState({
        headlineText: data_getForecast.Headline.Text,
        headlineCategory: data_getForecast.Headline.Category,
        Day: [{
          minimumTemperature: data_getForecast.DailyForecasts[0].Temperature.Minimum.Value,
          maximumTemperature: data_getForecast.DailyForecasts[0].Temperature.Maximum.Value,

          dayIcon: data_getForecast.DailyForecasts[0].Day.Icon,
          dayIconPhrase: data_getForecast.DailyForecasts[0].Day.IconPhrase,
          dayHasPrecipitation: data_getForecast.DailyForecasts[0].Day.HasPrecipitation,
          dayPrecipitationType: data_getForecast.DailyForecasts[0].Day.PrecipitationType,
          dayPrecipitationIntensity: data_getForecast.DailyForecasts[0].Day.PrecipitationType,

          nightIcon: data_getForecast.DailyForecasts[0].Night.Icon,
          nightIconPhrase: data_getForecast.DailyForecasts[0].Night.IconPhrase,
          nightHasPrecipitation: data_getForecast.DailyForecasts[0].Night.HasPrecipitation,
          nightPrecipitationType: data_getForecast.DailyForecasts[0].Night.PrecipitationType,
          nightPrecipitationIntensity: data_getForecast.DailyForecasts[0].Night.PrecipitationType
        },
        {
          minimumTemperature: data_getForecast.DailyForecasts[1].Temperature.Minimum.Value,
          maximumTemperature: data_getForecast.DailyForecasts[1].Temperature.Maximum.Value,

          dayIcon: data_getForecast.DailyForecasts[1].Day.Icon,
          dayIconPhrase: data_getForecast.DailyForecasts[1].Day.IconPhrase,
          dayHasPrecipitation: data_getForecast.DailyForecasts[1].Day.HasPrecipitation,
          dayPrecipitationType: data_getForecast.DailyForecasts[1].Day.PrecipitationType,
          dayPrecipitationIntensity: data_getForecast.DailyForecasts[1].Day.PrecipitationType,

          nightIcon: data_getForecast.DailyForecasts[1].Night.Icon,
          nightIconPhrase: data_getForecast.DailyForecasts[1].Night.IconPhrase,
          nightHasPrecipitation: data_getForecast.DailyForecasts[1].Night.HasPrecipitation,
          nightPrecipitationType: data_getForecast.DailyForecasts[1].Night.PrecipitationType,
          nightPrecipitationIntensity: data_getForecast.DailyForecasts[1].Night.PrecipitationType
        },
        {
          minimumTemperature: data_getForecast.DailyForecasts[2].Temperature.Minimum.Value,
          maximumTemperature: data_getForecast.DailyForecasts[2].Temperature.Maximum.Value,

          dayIcon: data_getForecast.DailyForecasts[2].Day.Icon,
          dayIconPhrase: data_getForecast.DailyForecasts[2].Day.IconPhrase,
          dayHasPrecipitation: data_getForecast.DailyForecasts[2].Day.HasPrecipitation,
          dayPrecipitationType: data_getForecast.DailyForecasts[2].Day.PrecipitationType,
          dayPrecipitationIntensity: data_getForecast.DailyForecasts[2].Day.PrecipitationType,

          nightIcon: data_getForecast.DailyForecasts[2].Night.Icon,
          nightIconPhrase: data_getForecast.DailyForecasts[2].Night.IconPhrase,
          nightHasPrecipitation: data_getForecast.DailyForecasts[2].Night.HasPrecipitation,
          nightPrecipitationType: data_getForecast.DailyForecasts[2].Night.PrecipitationType,
          nightPrecipitationIntensity: data_getForecast.DailyForecasts[2].Night.PrecipitationType
        },
        {
          minimumTemperature: data_getForecast.DailyForecasts[3].Temperature.Minimum.Value,
          maximumTemperature: data_getForecast.DailyForecasts[3].Temperature.Maximum.Value,

          dayIcon: data_getForecast.DailyForecasts[3].Day.Icon,
          dayIconPhrase: data_getForecast.DailyForecasts[3].Day.IconPhrase,
          dayHasPrecipitation: data_getForecast.DailyForecasts[3].Day.HasPrecipitation,
          dayPrecipitationType: data_getForecast.DailyForecasts[3].Day.PrecipitationType,
          dayPrecipitationIntensity: data_getForecast.DailyForecasts[3].Day.PrecipitationType,

          nightIcon: data_getForecast.DailyForecasts[3].Night.Icon,
          nightIconPhrase: data_getForecast.DailyForecasts[3].Night.IconPhrase,
          nightHasPrecipitation: data_getForecast.DailyForecasts[3].Night.HasPrecipitation,
          nightPrecipitationType: data_getForecast.DailyForecasts[3].Night.PrecipitationType,
          nightPrecipitationIntensity: data_getForecast.DailyForecasts[3].Night.PrecipitationType
        },
        {
          minimumTemperature: data_getForecast.DailyForecasts[4].Temperature.Minimum.Value,
          maximumTemperature: data_getForecast.DailyForecasts[4].Temperature.Maximum.Value,

          dayIcon: data_getForecast.DailyForecasts[4].Day.Icon,
          dayIconPhrase: data_getForecast.DailyForecasts[4].Day.IconPhrase,
          dayHasPrecipitation: data_getForecast.DailyForecasts[4].Day.HasPrecipitation,
          dayPrecipitationType: data_getForecast.DailyForecasts[4].Day.PrecipitationType,
          dayPrecipitationIntensity: data_getForecast.DailyForecasts[4].Day.PrecipitationType,

          nightIcon: data_getForecast.DailyForecasts[4].Night.Icon,
          nightIconPhrase: data_getForecast.DailyForecasts[4].Night.IconPhrase,
          nightHasPrecipitation: data_getForecast.DailyForecasts[4].Night.HasPrecipitation,
          nightPrecipitationType: data_getForecast.DailyForecasts[4].Night.PrecipitationType,
          nightPrecipitationIntensity: data_getForecast.DailyForecasts[4].Night.PrecipitationType
        }
        ]
      });
    }
    catch{
      console.error("gion");
    }
  };
  render() {
    return (
      <div>
        <React.StrictMode>
          <WeatherBlock getWeather={this.getWeather}
            weather={this.state}
          />
        </React.StrictMode>
      </div>
    );
  }
}

export default App;