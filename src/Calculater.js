import React, { Component } from 'react';
import Temperatureinput from './Temperatureinput';
import Boilingwater from './Boilingwater';


class Calculater extends Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = {temperature: ' ', scale: 'f'};
  }
  
  handleCelsiusChange(temperature) {
    this.setState({scale: 'c', temperature});
  };
  
  handleFahrenheitChange(temperature) {
    this.setState({scale: 'f', temperature});
  };
    
  

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? /*<Converter callingfun={()=> thhis.tryConvert(temperature,toCelsius)}/>*/ tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? /*<Converter callingfun={()=> thhis.tryConvert(temperature,tofahrenheit)}/>*/ tryConvert(temperature, toFahrenheit) : temperature;

    function toCelsius(fahrenheit) {
      return (fahrenheit - 32) * 5 / 9;
    };
      
    function toFahrenheit(celsius) {
      return (celsius * 9 / 5) + 32;
    };
      
    function tryConvert(temperature, convert) {
      const input = parseFloat(temperature);
      if (Number.isNaN(input)) {
        return '';
      }
      const output = convert(input);
      const rounded = Math.round(output * 1000) / 1000;
      return rounded.toString();
    }
    return (
      <div>
        <Temperatureinput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange} />
        <Temperatureinput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange} />
        <Boilingwater
          celsius={parseFloat(celsius)} />
      </div>
    );
  }
};
export default Calculater;