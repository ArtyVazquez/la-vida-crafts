import React from 'react'
import Image from 'next/image'
import styles from '/styles/Footer.module.css'

export default function footer() {
  return (
    <div className={styles.dis}>
      
      <a className={styles.imghref}  href='https://www.facebook.com/Lavidacrafts/'>
        <Image
                    src='/Images/facebook.png'
                    alt="Facebook logo"
                    height={50}
                    width={50}
                    objectFit="responsive" />
      </a>

      <a className={styles.imghref} href='https://instagram.com/Lavidacrafts1'>
        <Image
                      src='/Images/instagram.png'
                      alt="instagram logo"
                      height={50}
                      width={50}
                      objectFit="responsive" />
      </a>

      <a className={styles.imghref} href='https://tiktok.com/@Lavidacrafts1'>
        <Image
                    src='/Images/tiktok.png'
                    alt="tiktok logo"
                    height={50}
                    width={50}
                    objectFit="responsive" />
      </a>
    </div>
  )
}
