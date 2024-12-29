import React from 'react';
import './article.css';

const Article = ({imgUrl, title}) => {
  return (
    <div className='comp__blog-container_article'>
      <div className='comp__blog-container_article-image'>
        <img src={imgUrl} alt="layanan komputasi" />
      </div>
      <div className='comp__blog-container_article-content'>
        <div>
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  )
}

export default Article