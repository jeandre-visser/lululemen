import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Lululemen</title>
        <meta name="description" content="Lululemen - Activewear for Men" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Banner
      <div>
        <h2>Men's Activewear</h2>
        <p>Gear that withstands any exercise you put it through</p>
      </div>

      <div>
        {["Shirt", "Shorts", "Jogger"].map((item) => item)}
      </div>
    </>
  )
}
