import React, { Component } from 'react';

const Conditions = props => {
  const { temperature_string, weather, relative_humidity, temp_f, feelslike_f, wind_gust_mph, icon_url, dewpoint_f } = props.observ;
  console.log('props', props);
  return (
    <div>
      <h3 className="text-center">{temperature_string} {weather}</h3>
      <table className="table">
        <thead>
          <tr>
            <th><img src={icon_url} alt={weather}/></th>
            <th>Humidity</th>
            <th>Temp</th>
            <th>Feels Like</th>
            <th>Wind</th>
            <th>Dewpoint</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{weather}</td>
            <td>{relative_humidity}</td>
            <td>{temp_f}</td>
            <td>{feelslike_f}</td>
            <td>{wind_gust_mph}</td>
            <td>{dewpoint_f}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Conditions;
