import React from 'react'
import './brand.css'
import {  google, slack, atlassian, dropbox, shopify} from './import'

const Brand = () => {
  return (
    <div className='web3__brand section__padding'>
       <div>
        <a href="#">
          <img src={google} alt="google" />
        </a>
       </div>
       <div>
        <a href="#">
          <img src={slack} alt="google" />
        </a>
       </div>
       <div>
          <a href="#">
            <img src={atlassian} alt="google" />
          </a>
       </div>
       <div>
        <a href="#">
          <img src={dropbox} alt="google" />
        </a>
       </div>
       <div>
        <a href="#">
          <img src={shopify} alt="google" />
        </a>
       </div>
    </div>
  )
}
export default Brand