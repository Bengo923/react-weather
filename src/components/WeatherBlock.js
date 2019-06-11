import React from 'react';
import Form from './Form';


class WeatherBlock extends React.Component {
    render() {
        return (
            <div>
                <h1>Get your weather information.</h1>
                <Form getWeather={this.props.getWeather} />
            </div>
        );
    };
}

export default WeatherBlock;