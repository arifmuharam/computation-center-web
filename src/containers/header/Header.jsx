import React from 'react';
import './header.css';
import server from '../../assets/datamain2.svg';

const Header = () => {
  return (
    <div className='comp__header section__padding' id='home'>
      <div className='comp__header-content'>
        <h1>Computing Service by Bisa.ai</h1>
        <p>Menghadirkan layanan High Performance Computing (HPC) dengan sistem operasi linux yang bersifat remote melalui cloud yang dapat diakses melalui website Bisa AI.</p>
        <div className='comp__header-content__input'>
          <button type='button'>Lihat Layanan</button>
        </div>
      </div>
      <div className='comp__header-image'>
          <img src={server} alt="server" />
        </div>
    </div>
  )
}

export default Header