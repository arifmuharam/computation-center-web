import React from 'react';
import './footer.css';
import logo from '../../assets/logofooter.png';

const Footer = () => {
  return (
    <div className='comp__footer section__padding'>
      <div className='comp__footer-links'>
        <div className='comp__footer-links_logo'>
          <img src={logo} alt="logo" />
          <p>Support by Bisa.ai</p>
        </div>
        <div className='comp__footer-links_div'>
          <h4>Tentang</h4>
          <p>Computation Center</p>
          <p>FPGA</p>
          <p>Parallel Processing</p>
        </div>
        <div className='comp__footer-links_div'>
          <h4>Sumber Daya</h4>
          <p>Alur penyewaan</p>
          <p>Portfolio</p>
          <p>FAQ</p>
        </div>
        <div className='comp__footer-links_div'>
          <h4>Contact</h4>
          <p>Eduplex Coworking Space, Jln. Ir. H. Juanda Dago no. 84, Bandung, Jawa Barat</p>
          <p>+62 821 1665 4087</p>
          <p>info@computationcenter.id</p>
        </div>
      </div>
      <div className='comp__footer-copyright'>
        <p>&copy; Copyright by Computation Center</p>
      </div>
      </div>
  )
}

export default Footer