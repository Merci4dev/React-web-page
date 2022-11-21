import React from 'react'
import './blog.css'
// reusando la logicas del componente article
import { Article } from '../../components'
import {blog01, blog02,blog03, blog04, blog05} from './import'

const Blog = () => {
  return (
    <div className='web3__blog section__padding' id='blog'>
      <div className='web3__blog-heading'>
        <h1 className='gradient__text'>Lorem ipsum dolor sit, amet consectetur adipisicing.</h1>
      </div>
      <div className='web3__blog-container'>
        <div className='web3__blog-container_groupA'>
          <Article imgUrl={blog01} date="Sep 26, 2022" title="Post title Here click on it to Access"/> 
        </div>
        <div className='web3__blog-container_groupB'>
          <Article imgUrl={blog02} date="Sep 26, 2022" title="Post title Here click on it to Access"/> 
          <Article imgUrl={blog03} date="Sep 26, 2022" title="Post title Here click on it to ccess"/> 
          <Article imgUrl={blog04} date="Sep 26, 2022" title="Post title Here click on it to Access"/> 
          <Article imgUrl={blog05} date="Sep 26, 2022" title="Post title Here click on it to Access"/> 
        </div>
      </div>
    </div>
  )
}

export default Blog