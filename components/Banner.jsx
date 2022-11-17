import React from 'react';
import Link from 'next/link';
import { images } from '../constants/index';
import Image from 'next/image'

const Banner = () => {
  return (
    <div className="banner-container">
      <div>
        <p className="banner-small-text">Athletic Apparel</p>
        <h1>lululemen</h1>
        <h3>For Him</h3>
        <Image src={images.logo} alt="banner-image" className="banner-image" />
        <div>
          <Link href="/product/id" >
            <button type="button" >EXPLORE PRODUCTS</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Banner