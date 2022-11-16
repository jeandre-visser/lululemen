import React from 'react';
import Link from 'next/link';

const Banner = () => {
  return (
    <div className="banner-container">
      <div>
        <p className="metal-vent">TEXT</p>
        <h3>MID</h3>
        <img src="" alt="metal-vent-shirt" className="banner-image" />
        <div>
          <Link href="/product/id" >
            <button type="button" >BUTTON</button>
          </Link>
          <div className="desc">
            <h5>DESC</h5>
            <p>description</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner