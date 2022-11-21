import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import blog02 from '../../assets/blog02.png'

const Header = () => {
  return (
    <div className='web3__header section__padding ' id='home'>
      <div className='web3__header-content'>
        <h1 className='gradient__text'>Discover the amazing world of Web3</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio vero quis voluptas nisi, atque voluptatem aspernatur facere tempore! Dolores, obcaecati.</p>

        <div className='web3__header-content__input'>
            <input type="email" placeholder='Your email Address' autoFocus/>
            <button type='button'> Get Started</button>
        </div>
        <div className='web3__header-content_people'>
            <img src={people} alt="People"/>
            <p>3,230 Peope are using this Service</p>
        </div>
      </div>
      
      <div className='web3__header-image'>
        <img src={blog02} alt="blog02"/>
      </div>
    </div>
  )
}

export default Header