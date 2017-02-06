var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/find?units=metric&appid=81b7fda9a5ad7ef4bb636d8cd3197a37';

module.exports = {
    getTemp: function (location) {

        var encodedLocation = encodeURIComponent(location);
        var requestUrl      = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation},it`;

        return axios.get(requestUrl).then(function (res) {
            if(res.data.cod != 200 || res.data.list.length == 0) {
                throw new Error('Unable to fetch weather for that location');
            }else {
                return res.data.list[0].main.temp;
            }
        }, function (err) {
            throw new Error('Unable to fetch weather for that location');
        });

    }
};