

import React from 'react'; 


class Clock extends React.Component{ 

  constructor (props) {
    super(props);
    this.state = { time: new Date()};
    this.intervalId = undefined;
    // debugger
  } 

  tick () {
    this.setState({ time: new Date()});
  }

  render() {
    // debugger
    return (<div>
        <h1>Clock</h1>
      <p> {this.state.time.getHours()} : {this.state.time.getMinutes()} : {this.state.time.getSeconds()}</p>
      </div>)
  };

  componentDidMount() {
    let intId = setInterval(this.tick.bind(this), 1000);
    this.intervalId = intId;
  }

  componentWillUnmount() {
    clearInterval()
  }
}; 

export default Clock; 
