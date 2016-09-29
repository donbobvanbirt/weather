import React, { Component } from 'react'

import WeatherActions from '../actions/WeatherActions'

export default class LocalSearch extends Component {
  constructor(props) {
    super(props);

    this.getWeather = this.getWeather.bind(this);
  }

  componentWillMount() {
    WeatherActions.getForcast('autoip');
  }

  getWeather(e) {
    e.preventDefault();
    let location = this.refs.searchBar.value;
    console.log('clicked!', location);
    WeatherActions.getForcast(location);
  }

  render() {
    return (
      <div className="form-group">
        <form>
          <input type="text" className="form-control" ref='searchBar' id='searchBar'/>
          <button onClick={this.getWeather} className="btn btn-default">Get Weather</button>
        </form>
      </div>
    )
  }
}
