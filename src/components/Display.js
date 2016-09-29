import React, { Component } from 'react'

import WeatherActions from '../actions/WeatherActions'
import WeatherStore from '../stores/WeatherStore'
import Location from './Location'

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
    if (this.state.conditions) {
      display_location = this.state.conditions.data.current_observation.display_location;
    }

    return (
      <Location location={display_location}/>
    )
  }
}
