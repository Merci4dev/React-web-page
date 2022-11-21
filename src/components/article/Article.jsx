import React from 'react'
import './article.css'
// Estos articulos seran usados en el componente blog 

const Article = ({imgUrl, date, title}) => {
  return (
    <div className='web3__blog-container_article'>
      <div className='web3__blog-container_article-image'>
        <img src={imgUrl} alt='blogImage' />
      </div>
      <div className='web3__blog-container_article-content'> 
          <div>
            <p>{date}</p>
            <h3>{title}</h3>
          </div>
          <p>Read Full Article</p>
      </div>
    </div>
  )
}

export default Article