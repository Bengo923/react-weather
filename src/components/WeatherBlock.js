import React from 'react';
import WeatherCard from './WeatherCard';
import loadingGif from '../assets/gifs/weatherLoading.gif'
import * as moment from 'moment';
import './WeatherBlock.css'

class WeatherBlock extends React.Component {
    getDay(n) {
        let d = new Date().getDay();
        let weekDay = new Array(7);
        weekDay[0] = "Duminica";
        weekDay[1] = "Luni";
        weekDay[2] = "Marti";
        weekDay[3] = "Miercuri";
        weekDay[4] = "Joi";
        weekDay[5] = "Vineri";
        weekDay[6] = "Sambata";

        return weekDay[(d + n) % 7];
    }

    // #region checkData
    checkDataIsReady() {
        return this.props.dataInfo.isReady;
    }

    checkDataIsOk() {
        return this.props.dataInfo.isOk;
    }

    checkData() {
        return this.props.dataInfo.isOk && this.props.dataInfo.isReady;
    }
    // #endregion 

    weatherCards() {
        if (this.checkData()) {
            return (
                <div>
                    <WeatherCard
                        day={this.getDay(0)}
                        weather={this.props.weather.Day[0]}
                    />
                    <WeatherCard
                        day={this.getDay(1)}
                        weather={this.props.weather.Day[1]}
                    />
                    <WeatherCard
                        day={this.getDay(2)}
                        weather={this.props.weather.Day[2]}
                    />
                    <WeatherCard
                        day={this.getDay(3)}
                        weather={this.props.weather.Day[3]}
                    />
                    <WeatherCard
                        day={this.getDay(4)}
                        weather={this.props.weather.Day[4]}
                    />
                </div>
            );
        }
    }

    setInformationDivClass() {
        if (this.checkDataIsReady() !== undefined) {
            return 'informationDiv-ready';
        }
        else {
            return;
        }
    }

    getWeatherIcon(id) {
        if (this.props.areIconsLoaded === true) {
            for (let i = 0; i < this.props.weatherIcons.length; i++) {
                const icon = this.props.weatherIcons[i];
                if (icon.id === id) {
                    return icon.svg;
                }
            }
        }
        return;
    }

    render() {
        return (
            <div id="informationDiv" className={this.setInformationDivClass()}>
                {/* check if it the data is loading, if yes then it shows a loading GIF */}
                {(() => {
                    if (this.checkDataIsReady() === false) {
                        return <img className='centerImage' alt={"loading GIF"} width="100px" src={loadingGif} />
                    }
                })()}
                {/* check if the data is returned, if yes its shows the weather information (card) */}
                {(() => {
                    if (this.checkData()) {
                        return (
                            <div>
                                <div style={{ textAlign: "center" }}>
                                    <span style={{ fontSize: 20 }}>{this.props.weather.name}</span>
                                    <span style={{ fontSize: 17 }}>{', ' + this.props.weather.sys.country}</span>
                                    <br />
                                    <span style={{ fontSize: 15 }}>{this.getDay(0) + ", " + moment.unix(this.props.weather.dt).format("HH:00")}</span>
                                    <br />
                                </div>
                                <div>
                                    <span className='pl-4' style={{ fontSize: 24 }}>{(() => {
                                        let description = this.props.weather.weather[0].description;
                                        return description.charAt(0).toUpperCase() + description.slice(1);
                                    })()}
                                    </span>
                                    <br />
                                    <img width="100" src={this.getWeatherIcon(this.props.weather.weather[0].id)} alt="weather icon" />
                                    <span>{Math.floor(this.props.weather.main.temp)} °C</span>
                                </div>
                            </div>
                        );
                    }
                })()}
            </div>
            // {/* {this.weatherCards()} */ }
        );
    };
}

export default WeatherBlock;