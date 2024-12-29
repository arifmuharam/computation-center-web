import React from 'react';
import { Feature } from '../../components';
import './features.css';

const featuresData = [
  {
    title: 'Dapat menyelesaikan komputasi beban berat'
  },
  {
    title: 'Dapat digunakan kapanpun dan dimanapun'
  },
  {
    title: 'Memiliki banyak kemampuan seperti Computer Clustering, Multi Processor, dan GPU yang kuat'
  },
  {
    title: 'Menghemat biaya, meningkatkan efisiensi dan fleksibilitas'
  },
]

const Features = () => {
  return (
    <div className='comp__features section__padding' id='features'>
      <div className='comp__features-heading'>
        <h1>Mengapa menggunakan HPC ?</h1>
      </div>
      <div className='comp__features-container'>
        {featuresData.map((item, index) => (
          <Feature title={item.title} key={item.title + index} />
        ))}
      </div>
      </div>
  )
}

export default Features