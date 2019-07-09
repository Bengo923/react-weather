import React from 'react';
import loadingGif from '../assets/gifs/weatherLoading.gif'

class ConditionalWeatherLoadingGif extends React.Component {
    styling = {
        centerImage: {
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto'
        },
    }

    render() {
        if (this.props.checkDataIsReady === false) {
            return <img style={this.styling.centerImage} alt={"loading GIF"} width="100px" src={loadingGif} />
        }
        return null;
    }
}

export default ConditionalWeatherLoadingGif;