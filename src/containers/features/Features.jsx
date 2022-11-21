import React from 'react'
import './feature.css'
import { Feature } from '../../components'

const featuresData = [
  {
    title: "1 Lorem ipsum, dolor sit amet ",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum officia totam neque molestiae. Deserunt, iure?"
  },
  {
    title: "2 Lorem ipsum, dolor sit amet ",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum officia totam neque molestiae. Deserunt, iure?"
  },
  {
    title: "3 Lorem ipsum, dolor sit amet ",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum officia totam neque molestiae. Deserunt, iure?"
  },
  {
    title: "4 Lorem ipsum, dolor sit amet ",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum officia totam neque molestiae. Deserunt, iure?"
  },
]

const Features = () => {
  return (
    <div className='web3__features section__padding ' id='features'>
      <div className='web3__features-heading'>
        <h1 className='gradient__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum accusamus adipisci.</h1>

        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum officia totam neque molestiae. Deserunt, iure?</p>
      </div>
      <div className='web3__features-container'>
      {featuresData.map((item,index) =>(
        <Feature title={item.title} text={item.text} key={item.title + index}/>
      ))}
      </div>
    </div>
  )
}

export default Features