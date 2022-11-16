import Head from 'next/head'
import Image from 'next/image';
import { Banner, BannerFooter, Product } from '../components';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Lululemen</title>
        <meta name="description" content="Lululemen - Activewear for Men" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <div className="products-heading">
        <h2>Activewear For Men</h2>
        <p>Gear that can handle anything you put it through</p>
      </div>

      <div className="products-container">
        {["Shirt", "Shorts", "Jogger"].map((item) => item)}
      </div>
      <BannerFooter />
    </div>
  )
}
