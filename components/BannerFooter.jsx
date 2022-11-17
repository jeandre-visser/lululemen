import React from 'react';
import { images } from '../constants/index';
import Image from 'next/image';
import { RiCopyrightFill } from 'react-icons/ri';

const BannerFooter = () => {
  return (
    <>
      <div className="banner-footer-container">
        <h1>Push Your Limits, with Limitless Apparal</h1>
        <Image src={images.footer} alt='footer' />
      </div>
      <div className='footnote'>
        <Image src={images.footnote} alt='logo' className="footer-logo" />
        <p><RiCopyrightFill fontSize={18} /> 2022 Lululemen <br/>All Rights Reserved</p>
      </div>
    </>
    )
    
}

export default BannerFooter