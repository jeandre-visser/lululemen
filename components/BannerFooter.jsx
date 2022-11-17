import React from 'react';
import { images } from '../constants/index';
import Image from 'next/image';

const BannerFooter = () => {
  return (
    <div className="banner-footer-container">
      <h1>Push Your Limits, with Limitless Apparal</h1>
      <Image src={images.footer} alt='footer' />
    </div>
  )
}

export default BannerFooter