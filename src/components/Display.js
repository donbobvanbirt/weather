import React, { Component } from 'react'

import WeatherActions from '../actions/WeatherActions'
import WeatherStore from '../stores/WeatherStore'
import Location from './Location'
import Conditions from './Conditions'

export default class Display extends Component {
  constructor() {
    super();

    this.state = {
      conditions: WeatherStore.getConditions(),
      forecast: WeatherStore.getForcast()
    }

    this._onChange = this._onChange.bind(this);
  }

  componentWillMount() {
    WeatherStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    WeatherStore.startListening(this._onChange);
  }

  _onChange() {
    this.setState({
      conditions: WeatherStore.getConditions(),
      forecast: WeatherStore.getForcast()
    })
    console.log('state:', this.state)
  }

  render() {
    let display_location = {};
    let current_observation = {};
    if (this.state.conditions) {
      display_location = this.state.conditions.data.current_observation.display_location;
      current_observation = this.state.conditions.data.current_observation;
      console.log('current_observation', current_observation);
    }

    return (
      <div>
        <Location location={display_location}/>
        <Conditions observ={current_observation}/>
      </div>
    )
  }
}
