import React from 'react';
import { images } from '../constants/index';
import Image from 'next/image';
import { RiCopyrightFill } from 'react-icons/ri';
import { BsInstagram, BsTwitter } from 'react-icons/bs';

const BannerFooter = () => {
  return (
    <>
      <div className="banner-footer-container">
        <h1>Push Your Limits, with Limitless Apparel</h1>
        <Image src={images.footer} alt='footer' />
      <div className="socials">
        <h2>Follow Us On: </h2> 
        <BsInstagram fontSize={30} />
        <BsTwitter fontSize={30} />
      </div>
      </div>
      <div className='footnote'>
        <Image src={images.footnote} alt='logo' className="footer-logo" />
        <p><RiCopyrightFill fontSize={18} /> 2022 Lululemen <br/>All Rights Reserved</p>
      </div>
      <div className="lulu">
        <h3>Inspired by</h3>
        <Image src={images.lulu} alt='lulu' />
      </div>
    </>
    )
    
}

export default BannerFooter