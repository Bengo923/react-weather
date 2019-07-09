import React from 'react';
import * as moment from 'moment';

class WeatherInformation extends React.Component {
    render() {
        if (this.props.checkData) {
            return (
                <div>
                    <div style={{ textAlign: "center" }}>
                        <span style={{ fontSize: 20 }}>{this.props.weather.name}</span>
                        <span style={{ fontSize: 17 }}>{', ' + this.props.weather.sys.country}</span>
                        <br />
                        <span style={{ fontSize: 15 }}>{this.props.getDay(0) + ", " + moment.unix(this.props.weather.dt).format("HH:00")}</span>
                        <br />
                    </div>
                    <div>
                        <span className='pl-4' style={{ fontSize: 24 }}>{(() => {
                            let description = this.props.weather.weather[0].description;
                            return description.charAt(0).toUpperCase() + description.slice(1);
                        })()}
                        </span>
                        <br />
                        <img width="100" src={this.props.getWeatherIcon(this.props.weather.weather[0].id)} alt="weather icon" />
                        <span>{Math.floor(this.props.weather.main.temp)} °C</span>
                    </div>
                </div>
            );
        }
        else{
            return null;
        }
    }
}

export default WeatherInformation;