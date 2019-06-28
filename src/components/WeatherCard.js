import React from 'react';

class WeatherCard extends React.Component {
    state = {

    };

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.weather !== prevProps.weather) {
            this.setState({

            }, () => {

            });
        }


    }

    divStyling = {
        display: "inline-block",
        paddingRight: "10px",
        textAlign: "center"
    }

    render() {
        return (
            <div style={this.divStyling}>
                <h1 style={{ fontSize: "15px" }}>{this.props.day}</h1>
                <img src={this.state.ico} alt="poza" />
                <div style={{ textAlign: "center" }}>
                    <span style={{ fontSize: "10px" }}>min: {this.state.minTemp}</span>
                    <span style={{ fontSize: "10px", paddingLeft: "5px" }}>max: {this.state.maxTemp}</span>
                </div>
            </div>
        );
    };
}


export default WeatherCard;