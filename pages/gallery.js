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
        {[...Array(25)].map((x, i) =>
         {
            let dest = "/Gallery/i" + i + ".jpeg";
            console.log(dest);
            return <ImgCard des={dest} key={i}/>
         }
        )}
      </div>
    </>
  )
}