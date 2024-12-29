import React from 'react';
import { Feature } from '../../components';
import './deskripsi.css';

const Deskripsi = () => {
  return (
    <div className='comp__deskripsi section__margin' id='desk'>
      <div className='comp__deskripsi-feature'>
        <Feature title='Apa itu High Performance Computing (HPC)' text='High Performance Computing atau HPC adalah proses optimasi performa komputasi pada cloud yang memberikan kemudahan pengelolaan data agar lebih produktif. Ada beberapa manfaat dari proses penggunaan HPC untuk berbagai kebutuhan yang lengkap dan menyeluruh.' />
      </div>
      <div className='comp__deskripsi-heading'>
        <h1 className='gradient__text'>Mengapa menggunakan High Performance Computing (HPC)?</h1>
      </div>
      <div className='comp__deskripsi-container'>
        <Feature title='Dapat menyelesaikan komputasi beban berat' />
        <Feature title='Dapat digunakan kapanpun dan dimanapun'/>
        <Feature title='Memiliki banyak kemampuan seperti Computer Clustering, Multi Processor, dan GPU yang kuat' />
        <Feature title='Menghemat biaya, meningkatkan efisiensi dan fleksibilitas'/>
      </div>
      </div>
  )
}

export default Deskripsi