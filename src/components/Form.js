import React from 'react';

class Form extends React.Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.getWeather}>
                    <input id="cityInput" type="text" name="city" placeholder="City..." />
                    <button>Get Weather</button>
                </form>
            </div>
        );
    };
}

export default Form;