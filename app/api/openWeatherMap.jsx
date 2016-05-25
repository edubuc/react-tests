var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=e1ed461c940b64139f9f2ba35ef42233&units=metric';

// e1ed461c940b64139f9f2ba35ef42233

module.exports = {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(res) {
      if (res.data.cod && res.data.message) {
        // console.log(res.data);
        throw new Error(res.data.message);
      } else {
        // console.log(res.data);
        return res.data.main.temp;
      }
    }, function(res) {
      // console.log(res.data);
      throw new Error(res.data.message);
    });
  }
};
