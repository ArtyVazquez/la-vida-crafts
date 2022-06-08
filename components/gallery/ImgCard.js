import React from 'react'
import Image from 'next/image'
import styles from '../../styles/Gallery.module.css'

export default function ImgCard(props) {
  return (
    <div className={styles.card}>
      <Image
             src={props.des}
             alt="la vida crafts img"
             width={350}
             height={350}
             objectFit="responsive"
         />
   </div>
  )
}
