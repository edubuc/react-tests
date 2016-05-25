var React = require('react');

var WeatherMessage = ({temp,location}) => {
  return(
    <div>
      <h3>Quel temps fait il ?</h3>
      <p>Il fait {temp}° à {location}</p>
    </div>

  );
}

module.exports = WeatherMessage;
