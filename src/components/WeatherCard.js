import React from 'react';
import weatherImg1 from '../images/01-s.png';
import weatherImg2 from '../images/02-s.png';
import weatherImg3 from '../images/03-s.png';
import weatherImg4 from '../images/04-s.png';
import weatherImg5 from '../images/05-s.png';
import weatherImg6 from '../images/06-s.png';
import weatherImg7 from '../images/07-s.png';
import weatherImg8 from '../images/08-s.png';
import weatherImg11 from '../images/11-s.png';
import weatherImg12 from '../images/12-s.png';
import weatherImg13 from '../images/13-s.png';
import weatherImg14 from '../images/14-s.png';
import weatherImg15 from '../images/15-s.png';
import weatherImg16 from '../images/16-s.png';
import weatherImg17 from '../images/17-s.png';
import weatherImg18 from '../images/18-s.png';
import weatherImg19 from '../images/19-s.png';
import weatherImg20 from '../images/20-s.png';
import weatherImg21 from '../images/21-s.png';
import weatherImg22 from '../images/22-s.png';
import weatherImg23 from '../images/23-s.png';
import weatherImg24 from '../images/24-s.png';
import weatherImg25 from '../images/25-s.png';
import weatherImg26 from '../images/26-s.png';
import weatherImg29 from '../images/29-s.png';
import weatherImg30 from '../images/30-s.png';
import weatherImg31 from '../images/31-s.png';
import weatherImg32 from '../images/32-s.png';
import weatherImg33 from '../images/33-s.png';
import weatherImg34 from '../images/34-s.png';
import weatherImg35 from '../images/35-s.png';
import weatherImg36 from '../images/36-s.png';
import weatherImg37 from '../images/37-s.png';
import weatherImg38 from '../images/38-s.png';
import weatherImg39 from '../images/39-s.png';
import weatherImg40 from '../images/40-s.png';
import weatherImg41 from '../images/41-s.png';
import weatherImg42 from '../images/42-s.png';
import weatherImg43 from '../images/43-s.png';
import weatherImg44 from '../images/44-s.png';

const divStyling = {
    display: "inline-block",
    paddingRight: "10px",
    textAlign: "center"
}

let time = new Date().getHours();

class WeatherCard extends React.Component {
    state = {
        ico: undefined,
        maxTemp: undefined,
        minTemp: undefined
    };

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.weather !== prevProps.weather) {
            this.setState({
                ico: this.props.weather.dayIcon,
                maxTemp: this.props.weather.maximumTemperature,
                minTemp: this.props.weather.minimumTemperature
            }, () => {
                switch (this.state.ico) {
                    case 1:
                        this.setState({
                            ico: weatherImg1
                        });
                        break;
                    case 2:
                        this.setState({
                            ico: weatherImg2
                        });
                        break
                    case 3:
                        this.setState({
                            ico: weatherImg3
                        });
                        break
                    case 4:
                        this.setState({
                            ico: weatherImg4
                        });
                        break
                    case 5:
                        this.setState({
                            ico: weatherImg5
                        });
                        break
                    case 6:
                        this.setState({
                            ico: weatherImg6
                        });
                        break
                    case 7:
                        this.setState({
                            ico: weatherImg7
                        });
                        break
                    case 8:
                        this.setState({
                            ico: weatherImg8
                        });
                        break
                    case 11:
                        this.setState({
                            ico: weatherImg11
                        });
                        break
                    case 12:
                        this.setState({
                            ico: weatherImg12
                        });
                        break
                    case 13:
                        this.setState({
                            ico: weatherImg13
                        });
                        break
                    case 14:
                        this.setState({
                            ico: weatherImg14
                        });
                        break
                    case 15:
                        this.setState({
                            ico: weatherImg15
                        });
                        break
                    case 16:
                        this.setState({
                            ico: weatherImg16
                        });
                        break
                    case 17:
                        this.setState({
                            ico: weatherImg17
                        });
                        break;
                    case 18:
                        this.setState({
                            ico: weatherImg18
                        });
                        break
                    case 19:
                        this.setState({
                            ico: weatherImg19
                        });
                        break
                    case 20:
                        this.setState({
                            ico: weatherImg20
                        });
                        break
                    case 21:
                        this.setState({
                            ico: weatherImg21
                        });
                        break
                    case 22:
                        this.setState({
                            ico: weatherImg22
                        });
                        break
                    case 23:
                        this.setState({
                            ico: weatherImg23
                        });
                        break
                    case 24:
                        this.setState({
                            ico: weatherImg24
                        });
                        break
                    case 25:
                        this.setState({
                            ico: weatherImg25
                        });
                        break;
                    case 26:
                        this.setState({
                            ico: weatherImg26
                        });
                        break
                    case 29:
                        this.setState({
                            ico: weatherImg29
                        });
                        break
                    case 30:
                        this.setState({
                            ico: weatherImg30
                        });
                        break
                    case 31:
                        this.setState({
                            ico: weatherImg31
                        });
                        break
                    case 32:
                        this.setState({
                            ico: weatherImg32
                        });
                        break
                    case 33:
                        this.setState({
                            ico: weatherImg33
                        });
                        break;
                    case 34:
                        this.setState({
                            ico: weatherImg34
                        });
                        break
                    case 35:
                        this.setState({
                            ico: weatherImg35
                        });
                        break
                    case 36:
                        this.setState({
                            ico: weatherImg36
                        });
                        break
                    case 37:
                        this.setState({
                            ico: weatherImg37
                        });
                        break
                    case 38:
                        this.setState({
                            ico: weatherImg38
                        });
                        break
                    case 39:
                        this.setState({
                            ico: weatherImg39
                        });
                        break
                    case 40:
                        this.setState({
                            ico: weatherImg40
                        });
                        break
                    case 41:
                        this.setState({
                            ico: weatherImg41
                        });
                        break;
                    case 42:
                        this.setState({
                            ico: weatherImg42
                        });
                        break
                    case 43:
                        this.setState({
                            ico: weatherImg43
                        });
                        break
                    case 44:
                        this.setState({
                            ico: weatherImg44
                        });
                        break

                    default:
                        // something
                        break;
                }
            });
        }


    }

    render() {
        return (
            <div style={divStyling}>
                <h1 style={{ fontSize: "15px" }}>{this.props.day}</h1>
                {/* require(`../images/${this.state.ico}-s.png`) */}
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