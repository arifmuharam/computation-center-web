import React from 'react';
import {Article} from '../../components';
import {blog01, blog02, blog03, blog04, blog05, blog06, blog07} from './import';
import './blog.css';

const Blog = () => {
  return (
    <div className='comp__blog section__padding' id='blog'>
      <div className='comp__blog-heading'> 
      <h1 className='gradient__text'>
      Layanan Sewa Komputasi
      </h1>
      </div>
      <div className='comp__blog-container'>
        <div className='comp__blog-container_group'>
          <Article imgUrl={blog01} title='IoT Devices'/>
          <Article imgUrl={blog02} title='Cloud Computing'/>
          <Article imgUrl={blog03} title='FPGA'/>
          <Article imgUrl={blog04} title='Parallel Processing'/>
          <Article imgUrl={blog05} title='Big Data'/>
          <Article imgUrl={blog06} title='GPU Processing'/>
          <Article imgUrl={blog07} title='Machine Learning'/>
        </div>
      </div>
      </div>
  )
}

export default Blog