var React           = require('react');
var WeatherForm     = require('WeatherForm');
var WeatherMessage  = require('WeatherMessage');
var OpenWeatherMap  = require('OpenWeatherMap');
var ErrorModal      = require('ErrorModal');

var Weather = React.createClass({
    getDefaultProps: function () {
        return {
            /*city: '',
            temp: ''*/
            isLoading: false,
            errorMessage: false
        }

    },
    getInitialState: function () {
        return {
            city: this.props.city,
            temp: this.props.temp
        }
    },
    handleSearch: function (location) {
        var _self = this;

        //debugger; useful for console debugging
        this.setState({isLoading: true, errorMessage: undefined});

        OpenWeatherMap.getTemp(location).then(function (temp) {
            _self.setState({city: location, temp: temp, isLoading: false});
        }, function (err) {
            _self.setState({isLoading: false, errorMessage: err.message});
        });
    },

    render: function () {

        var {isLoading, city, temp, errorMessage} = this.state;

        function renderMessage () {

            if(isLoading) {
                return <h3 className="text-center">Fetching weather...</h3>
            }else if(temp && city) {
                return <WeatherMessage city={city} temp={temp}/>;
            }

        }

        function renderError () {
            if(typeof errorMessage == 'string') {
                return (
                   <ErrorModal message={errorMessage}/>
                )
            }
        }

        return (
            <div>
                <h1 className="text-center">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
                {renderError()}
            </div>
        );

    }
});

module.exports = Weather;