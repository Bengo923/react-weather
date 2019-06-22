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

    render() {
        return (
            <div>
                <h1>Afla vremea.</h1>
                <Form getWeather={this.props.getWeather} />
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
            </div>
        );
    };
}

export default WeatherBlock;