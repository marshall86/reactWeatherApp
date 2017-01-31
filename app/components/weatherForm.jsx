var React  = require('react');

var WeatherForm = React.createClass({
    onFormSubmit: function (e) {

        e.preventDefault();

        var city = this.refs.city.value;
        if(!city.length) return;

        this.props.onSearch(city);
        this.refs.city.value = '';
        /*var _self = this;
        this.getTempPromise(city).then(function (temp) {

            _self.props.onSearch({city, temp});
            _self.refs.city.value = '';

        }, function (err) {
            console.log("promise err ", err);
        });*/

    },
    /*getTempPromise: function (location) {
        return new Promise(function(resolve, reject) {
            setTimeout(function () {
                if(location) {
                    resolve(40);
                }else {
                    reject('City not found');
                }
            }, 1000);

        });

    },*/
    render: function () {

        return (
            <div>
                <form name="cityForm" onSubmit={this.onFormSubmit}>
                    <input type="text" ref="city"/>
                    <button>Get Weather</button>
                </form>
            </div>
        );

    }
});

module.exports = WeatherForm;