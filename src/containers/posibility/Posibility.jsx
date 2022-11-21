import React from 'react'
import './posibility.css'
import pissibilityImage from '../../assets/pissibility.png'

const Posibility = () => {
  return (
    <div className='web3__possibility section__padding' id='possibility'>
      <div className='web3__possibility-image'>
        <img src={pissibilityImage} alt="Possibility" />
      </div>

      <div className='web3__possibility-content'>
        <h4>Reques Early Access to Ger Started </h4>
        <h1 className='gradient__text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, in?</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum minima sed cumque delectus aut ullam, deleniti similique error assumenda tempore.</p>
        <h4>Reques Early Access to Ger Started </h4>
      </div>
    </div>
  )
}

export default Posibility