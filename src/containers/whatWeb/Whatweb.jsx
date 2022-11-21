import React from 'react'
import { Feature } from '../../components'
import './whatweb.css'

const Whatweb = () => {
  return (
    <div className='web3__whatweb3 section__margin' id='web3'>
        <div className='web3__whatweb3-feature'>
          <Feature title='What is web3' text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit Lorem ipsum, dolor sit amet consectetur adipisicing elit'/>
        </div>
        <div className='web3__whatweb3-heading'>
          <h1 className='gradient__text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
          <p><a href="">Explore Library</a></p>
        </div>
        <div className='web3__whatweb3-container'>
          <Feature title='Chatbot' text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit'/>

          <Feature title='Knowledgebase' text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit'/>

          <Feature title='Education' text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit'/>         
        </div>
    </div>
  )
}

export default Whatweb