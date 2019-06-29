import * as $ from 'jquery';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavBar from './components/NavBar';
import WeatherBlock from './components/WeatherBlock';

class App extends React.Component {

  state = {
    weather: undefined,
    dataInfo: {
      isReady: undefined,
      isOk: undefined
    }
  };

  // the function called when the search button is pressed
  onSubmitCitySearchForm = async (event) => {
    event.preventDefault();
    await this.getWeather();
    await this.getWeatherIconsJSON();
  }



  async getWeather() {
    try {
      this.setState({
        dataInfo: {
          isReady: undefined,
          isOk: undefined
        }
      });

      const API_KEY = "a078070d87bfadcc95fcc5c5904fad04";

      const UNIT = 'metric';
      const CITY = $("#citySearchForm").val();
      console.log(CITY);

      const CORS_URL = 'https://cors-anywhere.herokuapp.com/';
      const URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&units=${UNIT}&appid=${API_KEY}&lang=ro`

      this.setState({
        dataInfo: {
          isReady: false,
          isOk: undefined
        }
      });

      // try to get the data from the www.openweathermap.org API
      const NOW_WEATHER = await fetch(CORS_URL + URL)
        .then(async (res) => {
          if (res.status !== 200) {
            throw new Error("Not 200 response, it's unable to find the city")
          }
          else {
            return await res.json();
          }
        })

      // check if it got the data without getting an error, and sends it if ok
      if (NOW_WEATHER.cod !== '404') {
        this.setState({
          weather: NOW_WEATHER,
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
      this.setState({
        dataInfo: {
          isReady: true,
          isOk: false
        }
      })
      console.error(err);
    }
  }

  async getWeatherIconsJSON() {
    console.log("AAAAAAA");
  }

  render() {
    return (
      <div>
        <NavBar onSubmitCitySearchForm={this.onSubmitCitySearchForm} />
        <Container fluid={false}>
          <Row>
            <Col>
              <WeatherBlock
                getWeather={this.getWeather}
                weather={this.state.weather}
                dataInfo={this.state.dataInfo}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;