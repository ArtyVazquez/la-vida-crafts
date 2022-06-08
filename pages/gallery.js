import React from 'react'
import ImgCard from '../components/gallery/ImgCard.js'
import Head from 'next/head'



export default function gallery() {
  return (
    <>
       <Head>
          <title>Gallery</title>
          <meta name="description" content="La Vida Crafts gallery." />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="d-flex justify-content-around flex-wrap" style={{ backgroundColor: "rgb(244, 237, 245)"}}>
        {/* iterate through the images folder */}
        <ImgCard des="/Gallery/IMG_20220126_103903_727.jpeg"/>
        <ImgCard des="/Gallery/IMG_20220126_103903_727.jpeg"/>
        <ImgCard des="/Gallery/IMG_20220126_103903_727.jpeg"/>
        <ImgCard des="/Gallery/IMG_20220126_103903_727.jpeg"/>
        <ImgCard des="/Gallery/IMG_20220126_103903_727.jpeg"/>
        <ImgCard des="/Gallery/IMG_20220126_103903_727.jpeg"/>
        <ImgCard des="/Gallery/IMG_20220126_103903_727.jpeg"/>
      </div>
    </>
  )
}