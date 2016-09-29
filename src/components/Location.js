import React, { Component } from 'react';

const Location = props => {
  const { city, state_name, country, zip } = props.location;
  return (

    <h3 className="text-center">{city} {state_name} {zip} {country}</h3>
  )
}

export default Location;
