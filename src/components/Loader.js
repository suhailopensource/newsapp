import React, { Component } from 'react'
import loading from './1480.gif'

export class Loader extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loading} alt="loading"/>
      </div>
    )
  }
}

export default Loader

