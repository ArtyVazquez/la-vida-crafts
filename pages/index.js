import Head from 'next/head'
import Image from 'next/image'
import MyNav from '../components/navbar/MyNav.js'
import Greetings from '../components/home/Greetings.js'
import MiniGallery from '../components/home/MiniGallery.js'


export default function Home() {
  return (
    <>
      <Head>
        <title>La Vida Crafts</title>
        <meta name="description" content="Custom crafts work" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Greetings />

      <MiniGallery />

    </>
  )
}
