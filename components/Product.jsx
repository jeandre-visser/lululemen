import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';
import Image from 'next/image';

const Product = ({ product: { image, name, slug, price } }) => {

  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card" >
          <Image
            className="product-image"
            src={urlFor(image && image[0])}
            layout="responsive"
          />
          <p className='product-name'>{name}</p>
          <p className='product-price'>${price}</p>
        </div>
      </Link>
    </div>
  )
}

export default Product