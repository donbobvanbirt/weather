import React, { Component } from 'react'

import LocalSearch from './LocalSearch'
import Display from './Display'

export default class Layout extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='container'>
        <h1 className='text-center'>Weather</h1>
        <LocalSearch />
        <Display />
      </div>
    )
  }
}
