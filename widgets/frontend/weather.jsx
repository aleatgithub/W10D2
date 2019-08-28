import React from 'react';

const toQueryString = (obj) => {
  const parts = [];
  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      parts.push(`${encodeURIComponent(i)}=${encodeURIComponent(obj[i])}`);
    }
  }
  return parts.join('&');
}

export default class Weather extends React.Component {

  constructor (props) { //refactor this
    super(props); 
    this.state = {
      weather: null
    }
    this.getWeather = this.getWeather.bind(this);
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.getWeather); 
  }

  getWeather(location) {
    let url = 'http://api.openweathermap.org/data/2.5/weather?';

    const params = {
      lat: location.coords.latitude,
      lon: location.coords.longitude
    };

    const APIkey = '76244946d3c782a76d767d65fe320f4b';
    url += `&APPID=${APIkey}`;
    url += toQueryString(params); //set up function that keys into params and turns them into query string
    
     // creating XMLHttpRequest below
    let xhr = new XMLHttpRequest(); 
      xhr.onreadystatechange = () => {
      
      if (xhr.status === 200 && xhr.readyState === XMLHttpRequest.DONE) {
        const data = JSON.parse(xhr.responseText);
        this.setState({ weather: data });
      }
    };

    xhr.open("GET", url, true); 
    xhr.send();
  }
  
  render () {

    return (  //figure out if degrees will be stored in the same key
      <div> 
        <h1> Weather </h1>
        <p> {this.greeting}</p>
      </div>
    )
  };
    
 };

//  export default Weather; 