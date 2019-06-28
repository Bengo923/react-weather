import React from 'react';
import Form from './Form';
import WeatherCard from './WeatherCard';


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

    information() {
        if (this.props.dataInfo.isReady && this.props.dataInfo.isOk) {
            return (
                <div style={{ textAlign: "center" }}>
                    <span style={{ fontSize: 20 }}>{this.props.weather.name}</span>
                    <span style={{ fontSize: 17 }}>{', ' + this.props.weather.sys.country}</span>
                    <br />
                    <span style={{ fontSize: 15 }}>{this.getDay(0)}</span>
                </div>
            );
        }
        else {
            return;
        }
    }

    weatherCards() {
        if (this.props.dataInfo.isReady && this.props.dataInfo.isOk) {
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
        else {
            return;
        }
    }

    divStyling = {
        border: "1px",
        borderStyle: "dashed",
        borderColor: "black"
    }

    render() {
        return (
            <div>
                <Form getWeather={this.props.getWeather} />
                <div style={this.divStyling}>
                    {this.information()}
                </div>
                {/* {this.weatherCards()} */}
            </div>
        );
    };
}

export default WeatherBlock;