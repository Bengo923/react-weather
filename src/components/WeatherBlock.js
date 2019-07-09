import React from 'react';
import WeatherCard from './WeatherCard';
import ConditionalWeatherLoadingGif from './WeatherLoadingGif';
import WeatherInformation from './WeatherInformation';

class WeatherBlock extends React.Component {
    getDay = (n) => {
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

    styling = {
        informationDiv: undefined
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

    setInformationDivStyle() {
        if (this.checkDataIsReady() !== undefined) {
            this.styling.informationDiv = {
                border: '1px',
                borderStyle: 'dashed',
                borderColor: 'black'
            }
            console.log(this.styling);
        }
        else {
            console.log(this.styling);
            return;
        }
    }

    getWeatherIcon = (id) => {
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
        this.setInformationDivStyle();
        return (
            <div id="informationDiv" style={this.styling.informationDiv}>
                <ConditionalWeatherLoadingGif
                    checkDataIsReady={this.checkDataIsReady()}
                />
                <WeatherInformation
                    weather={this.props.weather}
                    checkData={this.checkData()}
                    getDay={this.getDay}
                    getWeatherIcon={this.getWeatherIcon}
                />
                {/* check if the data is returned, if yes its shows the weather information (card) */}

            </div>
            // {/* {this.weatherCards()} */ }
        );
    };
}

export default WeatherBlock;