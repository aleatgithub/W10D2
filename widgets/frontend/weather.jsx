import React from 'react';

class Weather extends React.Component {

  constructor (props) {
    super(props); 
    this.state = { location: '', weatherData: {}}
    this.weather = undefined; 
  }



  componentDidMount() {
    navigator.geolocation.getCurrentPosition ( (position) => {
      this.setState({location: position});
    }
  }
 }