import React from 'react'
import './feature.css'

// Single feature component. let pasamos eltitulo como props
const Feature = ({title, text}) => {
  return (
    <div className='web3__features-container__feature'>
      <div className='web3__features-container__feature-title'>
        <div>
          <h1>{title}</h1>
        </div>
        <div className='web3__features-container_feature-text'>
          <p>{text}</p>
        </div>
      </div>
    </div>
  )
}

export default Feature

