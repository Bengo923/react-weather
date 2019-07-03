import * as $ from 'jquery';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavBar from './components/NavBar';
import WeatherBlock from './components/WeatherBlock';
import IconsData from './assets/json/iconsData.json';


class App extends React.Component {

  state = {
    weather: undefined,
    dataInfo: {
      isReady: undefined,
      isOk: undefined
    },
    areIconsLoaded: undefined,
    weatherIcons: []
  };

  onChangeCitySearchForm = async () => {
    if (this.state.areIconsLoaded !== true) {
      this.setState({
        areIconsLoaded: undefined
      });
    }

    await this.getWeatherIcons();
  }

  // the function called when the search button is pressed
  onSubmitCitySearchForm = async (event) => {
    event.preventDefault();

    this.setState({
      dataInfo: {
        isReady: undefined,
        isOk: undefined,
      },
    });

    await this.getWeather();
  }

  async getWeather() {
    try {
      const API_KEY = "a078070d87bfadcc95fcc5c5904fad04";

      const UNIT = 'metric';
      const CITY = $("#citySearchForm").val();

      const CORS_URL = 'https://cors-anywhere-bengo.herokuapp.com/';
      const URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&units=${UNIT}&appid=${API_KEY}&lang=ro`

      this.setState({
        dataInfo: {
          isReady: false,
          isOk: undefined
        }
      });

      // try to get the data from the www.openweathermap.org API
      const NOW_WEATHER = await fetch(CORS_URL + URL)
        .then(async (response) => {
          if (response.status !== 200) {
            throw new Error("Not 200 response, it's unable to find the city")
          }
          else {
            return await response.json();
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
    catch (error) {
      this.setState({
        dataInfo: {
          isReady: true,
          isOk: false
        }
      })
      console.error(error);
    }
  }

  async getWeatherIcons() {
    try {
      if (this.state.areIconsLoaded !== true) {
        this.setState({
          areIconsLoaded: false
        });

        const iconsData = IconsData;
        let weatherIcons = [];

        for (let i = 0; i < iconsData.length; i++) {
          let importedIcon = await import(`./assets/weather-svgs/${iconsData[i].icon}`);

          const icon = {
            svg: importedIcon.default,
            id: iconsData[i].id
          }

          weatherIcons[i] = icon;
        }

        this.setState({
          weatherIcons: weatherIcons,
          areIconsLoaded: true
        });

        console.warn("The icons were loaded")
      }
    }
    catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <div>
        <NavBar
          onSubmitCitySearchForm={this.onSubmitCitySearchForm}
          onChangeCitySearchForm={this.onChangeCitySearchForm}
        />
        <Container fluid={false}>
          <Row>
            <Col>
              <WeatherBlock
                weather={this.state.weather}
                dataInfo={this.state.dataInfo}
                weatherIcons={this.state.weatherIcons}
                areIconsLoaded={this.state.areIconsLoaded}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;